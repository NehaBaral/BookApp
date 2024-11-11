import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator, Alert } from "react-native";
import styles from "./styles";
import { useRef } from "react";
import { borrowOrReturnBook } from "../../cloudDatabase/write";
import { useBookContext } from "../../BookProvider";
import { loadBorrowedBooks } from "../../cloudDatabase/read";
import { useState, useEffect } from "react";

export default function BorrowedBookScreen() {

    const { borrowedBooks, returnBook, setBorrowedBooks } = useBookContext();
    const [isLoading, setIsLoading] = useState(false);

    const list = useRef(null);

    useEffect(() => {
        async function getBorrowedBooks() {
            try {
                setIsLoading(true);
                const bookList = await loadBorrowedBooks();
                setBorrowedBooks(bookList)
            } catch (error) {
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            }
        }
        getBorrowedBooks();
    }, []);


    const handleReturn = async (item) => {
        try {
            await borrowOrReturnBook(item.id, false);
            Alert.alert('Success', 'Book returned successfully');
            returnBook(item.id);
        } catch (error) {
            console.log('Failed to return books', error);
        } finally {
            setIsLoading(false);
            console.log('book returned successfully');
        }
    }

    if(isLoading){
        return(
          <View>
            <ActivityIndicator size='large' color='#0000ff'/>
          </View>  
        );
    }

    const renderItem = ({ item }) => (
            <View style={styles.bookView}>
                <Image
                    source={{ uri: item.coverPage }}
                    style = {styles.cover}
                    onError={(error) => console.log("Image loading error:", error.nativeEvent.error)}
                />
                <View style = {styles.bookView1}>
                    <Text style={styles.bookName}>Name : {item.bookName}</Text>
                    <Text style={styles.authorName}>Author : {item.authorName}</Text>
                    <TouchableOpacity style={styles.returnButton} onPress={() => handleReturn(item)}>
                    <Text style={styles.returnButtonText}>Return This Book</Text>
                </TouchableOpacity>
                </View>
            </View>
    );

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