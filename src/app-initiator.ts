import * as firebase from 'firebase';
import { FirebaseConfig } from './models/FirebaseConfig';

export class AppInitiator {

    constructor(protected firebaseConfig: FirebaseConfig) { }

    protected init(): firebase.app.App {

        return firebase.initializeApp(this.firebaseConfig);
    }

}
