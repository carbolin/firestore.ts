import { AppInitiator } from './app-initiator';
import { firebaseConfig } from './firebase-config';
import { DbInitiator } from './db-initiator';
import { CollectionUploader } from './upload/collection-uploader';
import { deutschland } from '../deutschland';
import { liechtenstein } from '../liechtenstein';

const firestore = new DbInitiator(firebaseConfig);
const db = firestore.dbInit();

const uploader = new CollectionUploader(db, 'lkf');

uploader.upload(liechtenstein);

