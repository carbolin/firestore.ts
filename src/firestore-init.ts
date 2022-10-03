import { Firestore, getFirestore } from 'firebase/firestore/lite';

import { AppInit } from './app-init';
import { FirebaseConfig } from './models/config';

export class FirestoreInit extends AppInit {

    constructor(protected firebaseConfig: FirebaseConfig) {
        super(firebaseConfig);
    }

    dbInit(): Firestore {
        const app = this.init();
        return getFirestore(app);
    }
}
