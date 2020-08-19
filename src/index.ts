import { AppInitiator } from './app-initiator';
import { firebaseConfig } from './firebase-config';
import { DbInitiator } from './db-initiator';
import { liechtenstein } from '../data/liechtenstein';
import { countries } from '../data/conutries';
import { CollectionUploader } from './upload/collection-uploader';
import { DocumentUploader } from './upload/document-uploader';

const firestore = new DbInitiator(firebaseConfig);
const db = firestore.dbInit();

const uploader = new DocumentUploader(db, 'data');

uploader.upload(countries);

