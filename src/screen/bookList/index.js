import { useEffect, useRef, useState } from "react"
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from "react-native"
import { loadBookList, sendBookList } from "../../cloudDatabase/read";
import styles from "./styles";

export default function BookListScreen({ navigation }){
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const list = useRef(null);
      
   

    useEffect(()=>{
        async function getBooks(){
            try{
                setIsLoading(true);
                setError(null);
                const bookList = await loadBookList();
                setBooks(bookList)
            }catch(error){
                setError('Failed to load books')
            } finally{
                setIsLoading(false);
            }
        }
        getBooks();
    }, []);


    const renderItem = ({ item })=>(
        <TouchableOpacity onPress={()=>itemClick(item)}>
            <View style = {styles.bookView}>
                <Text style = {styles.bookName}>Name of book : {item.bookName}</Text>
                <Text style = {styles.authorName}>Author : {item.authorName}</Text>
            </View>
        </TouchableOpacity>
    );

    const itemClick = (item) =>{
        navigation.navigate("BookDetail",{ item });
    }

    if(isLoading){
        return(
          <View>
            <ActivityIndicator size='large' color='#0000ff'/>
          </View>  
        );
    }

    return(
        <View style = {styles.container}>
            <FlatList
            ref={list}
            keyExtractor={(item) => item.id + item.bookName }
            data={books}
            renderItem={renderItem}
            />
        </View>
    )
}