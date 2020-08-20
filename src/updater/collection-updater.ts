import { firestore } from 'firebase';
import { Updater } from './Updater';

// export interface Updatable {

//     length: number;
// }

export class CollectionUpdater<T> implements Updater<T> {

    constructor(private db: firestore.Firestore, private collection: string) { }

    async update(data: T): Promise<void> {

        const batch: firestore.WriteBatch = this.db.batch();

        const collectionRef: firestore.CollectionReference<firestore.DocumentData>
            = this.db.collection(this.collection);

        const FieldValue = firestore.FieldValue;

        try {
            const snaps: firestore.QuerySnapshot<firestore.DocumentData> = await collectionRef.get();
            snaps.docs.forEach(doc => {

                const docRef: firestore.DocumentReference<firestore.DocumentData> = doc.ref;

                batch.update(docRef, { ...data, timestamp: FieldValue.serverTimestamp() });
            });

        }
        catch (e) {
            console.log(e.message, 'Error');
            process.exit(-1);
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

    }
}
