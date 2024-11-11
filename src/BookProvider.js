import { createContext, useContext, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [borrowedBooks, setBorrowedBooks] = useState([]);

    const borrowBook = (bookItem) => {
        setBooks((pBooks) => 
            pBooks.map((book) => (book.id === bookItem.id ? {...book,isBorrowed : true} : book))
        );
        setBorrowedBooks((pBorrowed) => [...pBorrowed, bookItem]);
    };

    const returnBook = (bookId) =>{
        setBorrowedBooks((pBorrowed) => 
            pBorrowed.filter((book) => book.id !== bookId)
        );

        setBooks((pBooks) => 
            pBooks.map((book) => book.id === bookId ? {...book,isBorrowed : false} : book)
        );
    };

    return (
        <BookContext.Provider value={{ books, setBooks, borrowedBooks, borrowBook, returnBook, setBorrowedBooks}}>
            {children}
        </BookContext.Provider>
    );
};

export const useBookContext = () =>{
    return useContext(BookContext);
};