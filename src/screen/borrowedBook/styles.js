import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container : {
       backgroundColor : 'white',
    },

    bookView : {
        flexDirection: 'row',
        backgroundColor: 'lightgray',
        padding : 12,
        margin : 16,
        borderColor : 'purple',
        borderWidth : 1,
        borderRadius : 10,
    },

    bookView1 : {
        marginStart : 16,
        marginEnd : 16,
        flexShrink: 1,
        marginTop : 16
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

    cover: {
        width: 100,
        height: 150,
        resizeMode: 'contain'
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