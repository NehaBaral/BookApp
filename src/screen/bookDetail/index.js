import { useNavigation } from "@react-navigation/native"
import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./styles";
import { borrowOrReturnBook } from "../../cloudDatabase/write";
import { useState } from "react";

export default function BookDetailScreen({ route }) {

    const [bookDetail, setBookDetail] = useState(route.params.item);


    const handleBorrow = async() => {
        try{
            const bookId = await borrowOrReturnBook(bookDetail.id,true);
            setBookDetail(prevState => ({
                ...prevState,
                isBorrowed: true
            }));
        }catch(error){
            console.log('Failed to load books');
        } finally{
            console.log('book borrowed successfully');
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: bookDetail.coverPage }}
                style={styles.cover}
                resizeMode="contain"
                onError={(error) => console.log("Image loading error:", error.nativeEvent.error)}
            />
            <Text style={styles.title}>{bookDetail.bookName}</Text>
            <Text style={styles.author}>Author Name : {bookDetail.authorName}</Text>
            <Text style={styles.briefSummary}>{bookDetail.briefSummary}</Text>
            <Text style={styles.rating}>Overall Rating : {bookDetail.rating}</Text>
            {bookDetail.isBorrowed ? (
                <Text style={styles.borrowedText}>This book is currently borrowed</Text>
            ) : (
                <TouchableOpacity style={styles.borrowButton} onPress={handleBorrow}>
                    <Text style={styles.borrowButtonText}>Borrow This Book</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}