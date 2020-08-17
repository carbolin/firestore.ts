import { AppInitiator } from './app-initiator';
import { firebaseConfig } from './firebase-config';
import { DbInitiator } from './db-initiator';
import { CollectionUploader } from './upload/collection-uploader';
import { deutschland } from '../deutschland';

const firestore = new DbInitiator(firebaseConfig);
const db = firestore.dbInit();

const uploader = new CollectionUploader(db, 'halal');

uploader.upload(deutschland)
    .then(() => console.log('nice'))

    .catch((e) => console.log(e.message, 'Error'));

