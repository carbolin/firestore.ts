import { Initiator } from './Initiator';
import { firebaseConfig } from './firebase-config';

const firebase = new Initiator(firebaseConfig);
firebase.init();

