import { Uploader } from './Uploader';
import { firestore } from 'firebase';

export class DocumentUploader implements Uploader {

    constructor(private db: firestore.Firestore, private collection: string) { }

    async upload(data: any[]): Promise<void> {

        const batch: firestore.WriteBatch = this.db.batch();

        const docRef: firestore.DocumentReference<firestore.DocumentData>
            = this.db.collection(this.collection).doc('countries');

        batch.set(docRef, { countries: data });


        try {
            await batch.commit();
            console.log(`Document uploaded`);
            process.exit(0);
        }
        catch (e) {
            console.log(e.message, 'Error');
            process.exit(-1);
        }


    }
}
