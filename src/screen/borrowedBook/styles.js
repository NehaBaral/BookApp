import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container : {
       backgroundColor : 'white',
    },

    bookView : {
        backgroundColor: 'lightgray',
        padding : 12,
        margin : 16,
        borderColor : 'purple',
        borderWidth : 1,
        borderRadius : 10,
    },

    bookName : {
        fontSize : 16,
        color : 'black',
        fontWeight : 'bold'
    },

    authorName : {
        fontSize : 14,
        marginTop : 8
    },

    returnButton: {
        backgroundColor: 'purple',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop : 16
    },

    returnButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign : 'center'
    },

});