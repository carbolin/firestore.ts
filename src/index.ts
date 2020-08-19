import { AppInitiator } from './app-initiator';
import { firebaseConfig } from './firebase-config';
import { DbInitiator } from './db-initiator';
import { FirestoreUploader } from './upload/firestore-uploader';
import { liechtenstein } from '../data/liechtenstein';
import { countries } from '../data/conutries';

const firestore = new DbInitiator(firebaseConfig);
const db = firestore.dbInit();

const uploader = new FirestoreUploader(db, 'test');

uploader.upload(countries);

