import * as firebase from 'firebase/app';

export class Initiator {

    constructor(private firebaseConfig: any) { }

    init(): firebase.app.App {

        return firebase.initializeApp(this.firebaseConfig);
    }

}
