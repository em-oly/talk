import { StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    commentContainer: {
        marginTop: 10,
        backgroundColor: 'white',
        width: Dimensions.get('window').width * .8,
        borderWidth: 2,
        borderRadius: 20,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    voteButtons: {
        marginLeft: 10,
        alignSelf: 'center',
        flexDirection: 'column',
    },

    flagButton: {
        width: "10%",
        alignSelf: 'center',
        
    },

    voteCount: {
        margin: 20,
        alignSelf: "center",

    },

    voteStyle: {
        fontWeight: "bold",
        fontFamily: 'monospace'
    },

    commentText: {
        flexWrap: "wrap",
        flex: 1,
        marginBottom: 5,
        marginTop: 5,
        paddingRight: 20,
    },

    userText: { 
        fontSize: 15,
        fontWeight: 'bold',
        flexWrap: "wrap",
        flex: 1,
        fontFamily: 'monospace',
        
    },

    bodyText: {
        flexWrap: "wrap",
        flex: 1,
        fontFamily: 'monospace',
    }
});

export default styles; 