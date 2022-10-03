import { FirebaseApp, initializeApp } from 'firebase/app';

import { FirebaseConfig } from './models/config';

export class AppInit {

    constructor(protected firebaseConfig: FirebaseConfig) { }

    protected init(): FirebaseApp {
        return initializeApp(this.firebaseConfig);
    }

}
