import { Uploader } from '../models/Uploader';
import * as firebase from 'firebase/app';

export class CollectionUploader implements Uploader {

    constructor(private db: firebase.firestore.Firestore, private collection: string) { }

    async upload(data: any[]) {

        const batch: firebase.firestore.WriteBatch = this.db.batch();

        const collectionRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData> = this.db.collection(this.collection);

        data.forEach(async (doc: firebase.firestore.DocumentData) => {
            const docRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> = collectionRef.doc();
            batch.set(docRef, doc);
        });

        await batch.commit();

        console.log(`Uploaded ${data.length} Documents finished`);

    }

}
