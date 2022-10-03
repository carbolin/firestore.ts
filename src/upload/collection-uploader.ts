import { doc, Firestore, writeBatch } from 'firebase/firestore/lite';

import { Uploader } from './uploader';

export class CollectionUploader implements Uploader {

    constructor(private db: Firestore, private collection: string) { }

    async upload(data: any[]): Promise<void> {

        console.log('Anzahl der Dokumente: ', data.length);

        if (data.length <= 500) {

            const batch = writeBatch(this.db);

            data.forEach(document => {
                const docRef = doc(this.db, this.collection);

                batch.set(docRef, { ...document });
            });

            try {
                await batch.commit();
                console.log(`Uploaded ${data.length} Documents`);
                process.exit(0);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log(error.message, 'Error');
                }
                process.exit(-1);
            }
        } else
            console.log('Maximum number of Documents for Upload exceeded');
    }
}
