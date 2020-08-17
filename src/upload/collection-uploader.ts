import { Uploader } from './Uploader';
import * as firebase from 'firebase/app';

export class CollectionUploader implements Uploader {

    constructor(private db: firebase.firestore.Firestore, private collection: string) { }

    async upload(data: any[]): Promise<void> {

        const batch: firebase.firestore.WriteBatch = this.db.batch();

        const collectionRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
            = this.db.collection(this.collection);

        data.forEach((doc: firebase.firestore.DocumentData) => {
            const docRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
                = collectionRef.doc();

            batch.set(docRef, doc);
        });

        try {
            await batch.commit();
            console.log(`Uploaded ${data.length} Documents finished`);
            process.exit(0);
        }
        catch (e) {
            console.log(e.message, 'Error');
            process.exit(-1);
        }
    }
}
