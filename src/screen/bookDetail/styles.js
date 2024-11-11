import { StyleSheet, Dimensions } from "react-native";
import styles from "../bookList/styles";

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
    },
    cover: {
        width: windowWidth * 0.6,
        height: windowWidth * 0.9,
        marginBottom: 16,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    author: {
        fontSize: 18,
        marginBottom: 8,
        fontWeight : '500'
    },
    summary: {
        fontSize: 16,
        marginBottom: 16,
        textAlign: 'center',
    },
    rating: {
        fontSize: 16,
        fontWeight : '600',
        color : 'purple',
        textAlign : 'left',
        marginTop : 2
    },

    borrowButton: {
        backgroundColor: 'purple',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },

    borrowButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    borrowedText: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
    },

});