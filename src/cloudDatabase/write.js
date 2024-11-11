import { db } from './FirebaseConfig';
import { collection, updateDoc, doc } from 'firebase/firestore';

export async function borrowOrReturnBook(bookId, bookStatus) {
    try {
        const dbCollection = collection(db, 'Books');
        const bookRef = doc(dbCollection, bookId);

        await updateDoc(bookRef, {
            isBorrowed: bookStatus
        });
        return bookId
    } catch (error) {
        console.error('Error updating borrowed book:', error);
        return null;
    }
}
