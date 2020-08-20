import { Updater } from './Updater';
import { firestore } from 'firebase';


export class QueryUpdater<T> implements Updater<T> {

    constructor(private db: firestore.Firestore, private collection: string) { }

    async update(data: T) {

        const batch: firestore.WriteBatch = this.db.batch();

        const FieldValue = firestore.FieldValue;

        try {

            const snaps: firestore.QuerySnapshot<firestore.DocumentData>
                = await this.db.collection(this.collection).where('code', '==', '7002').get();

            snaps.docs.forEach((doc: firestore.QueryDocumentSnapshot<firestore.DocumentData>) => {

                const docRef: firestore.DocumentReference<firestore.DocumentData> = doc.ref;

                batch.update(docRef, { ...data, timestamp: FieldValue.serverTimestamp() });

            });

        } catch (e) {

            console.log(e.message, 'Error');
        }

        try {
            await batch.commit();
            console.log(`Documents updated`);
            process.exit(0);

        }
        catch (e) {
            console.log(e.message, 'Error');
            process.exit(-1);
        }

        // this.db.runTransaction(async (transaction: firestore.Transaction) => {

        //     console.log('Transaction running');

        //     const collectionRef = await this.db.collection(this.collection).where('code', '==', '7002').get();

        //     collectionRef.docs.forEach((doc: firestore.QueryDocumentSnapshot<firestore.DocumentData>) => {

        //         const docRef: firestore.DocumentReference<firestore.DocumentData> = doc.ref;

        //         transaction.update(docRef, { ...data });
        //     });

        // }).then(() => {

        //     console.log('Transaction succeeded');
        // });
    }
}
