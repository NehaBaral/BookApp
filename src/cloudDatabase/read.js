import { addDoc, collection, doc, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from './FirebaseConfig';


export async function loadBookList(){
    const querySnapshot = await getDocs(collection(db,'Books'))
    return processQuery(querySnapshot)
    
}

export async function loadBookById(bookId){
    const dbCollection = collection(db, 'Books');
    const dbQuery = query(dbCollection, where('id','==', bookId))
    const querySnapshot = await getDocs(dbQuery);
    return processQuery(querySnapshot);
}

export async function loadBorrowedBooks() {
    const dbCollection = collection(db, 'Books')
    const dbQuery = query(dbCollection, where('isBorrowed', "==", true))
    const querySnapshot = await getDocs(dbQuery);
    return processQuery(querySnapshot)
}

function processQuery(querySnapshot){
    const books = [];

    querySnapshot.forEach((doc)=>{
        books.push({
            ...doc.data(),
            id: doc.id
        });
    });
    return books
}

export async function sendBookList(bookList) {
    try {
      const dbCollection = collection(db, 'Books');
      const batch = writeBatch(db);
  
      bookList.forEach((book) => {
        const newDocRef = doc(dbCollection);
        batch.set(newDocRef, book);
      });
  
      await batch.commit();
      return true;
    } catch (e) {
      console.error("Error adding documents: ", e);
      return false;
    }
  }
