import { AppInitiator } from './app-initiator';
import { firebaseConfig } from './firebase-config';
import { DbInitiator } from './db-initiator';
import { FirestoreUploader } from './upload/firestore-uploader';
import { liechtenstein } from '../liechtenstein';

const firestore = new DbInitiator(firebaseConfig);
const db = firestore.dbInit();

const uploader = new FirestoreUploader(db, 'test');

uploader.upload(liechtenstein);

