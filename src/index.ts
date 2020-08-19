import { AppInitiator } from './app-initiator';
import { firebaseConfig } from './firebase-config';
import { DbInitiator } from './db-initiator';
import { liechtenstein } from '../data/liechtenstein';
import { CollectionUploader } from './upload/collection-uploader';
import { DocumentUploader } from './upload/document-uploader';
import { complexCountries } from '../data/complex_countries_eu';

const firestore = new DbInitiator(firebaseConfig);
const db = firestore.dbInit();

const uploader = new CollectionUploader(db, 'countries');

uploader.upload(complexCountries);

