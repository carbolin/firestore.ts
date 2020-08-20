import { Uploader } from './Uploader';
import { firestore } from 'firebase';

export class CollectionUploader implements Uploader {

    constructor(private db: firestore.Firestore, private collection: string) { }

    async upload(data: any[]): Promise<void> {

        console.log('Anzahl der Dokumente: ', data.length);


        if (data.length <= 500) {

            const batch: firestore.WriteBatch = this.db.batch();

            const collectionRef: firestore.CollectionReference<firestore.DocumentData>
                = this.db.collection(this.collection);

            const FieldValue = firestore.FieldValue;


            data.forEach((doc: firestore.DocumentData) => {
                const docRef: firestore.DocumentReference<firestore.DocumentData>
                    = collectionRef.doc();

                batch.set(docRef, { ...doc, timestamp: FieldValue.serverTimestamp() });
            });

            try {
                await batch.commit();
                console.log(`Uploaded ${data.length} Documents`);
                process.exit(0);
            }
            catch (e) {
                console.log(e.message, 'Error');
                process.exit(-1);
            }

        } else
            console.log('Maximum number of Documents for Upload exceeded');
    }
}
