import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { loadBorrowedBooks } from "../../cloudDatabase/read";
import { useState, useEffect, useRef } from "react";
import { borrowOrReturnBook } from "../../cloudDatabase/write";

export default function BorrowedBookScreen() {

    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const list = useRef(null);

    useEffect(() => {
        async function getBorrowedBooks() {
            try {
                setIsLoading(true);
                setError(null);
                const bookList = await loadBorrowedBooks();
                setBorrowedBooks(bookList)
            } catch (error) {
                setError('Failed to load books')
            } finally {
                setIsLoading(false);
            }
        }
        getBorrowedBooks();
    }, []);

    const handleReturn = async(item) => {
        try{
            const bookList = await borrowOrReturnBook(item.id,false);
            setBorrowedBooks(books => books.filter(book=> book.id !== item.id))
        }catch(error){
            console.log('Failed to return books',error);
        } finally{
            console.log('book borrowed successfully');
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => itemClick(item)}>
            <View style={styles.bookView}>
                <View>
                    <Text style={styles.bookName}>Name of book : {item.bookName}</Text>
                    <Text style={styles.authorName}>Author : {item.authorName}</Text>
                </View>
                <TouchableOpacity style={styles.returnButton} onPress={()=> handleReturn(item)}>
                    <Text style={styles.returnButtonText}>Return This Book</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    const itemClick = (item) => {
    }

    return (
        <View style={styles.container}>
            <FlatList
                ref={list}
                keyExtractor={(item) => item.id + item.bookName}
                data={borrowedBooks}
                renderItem={renderItem}
            />
        </View>
    )
}