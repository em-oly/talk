import { StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    commentContainer: {
        marginTop: '3%',
        backgroundColor: 'white',
        width: Dimensions.get('window').width * .9,
        borderWidth: 2,
        borderRadius: 20,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    voteButtons: {
        width: "10%",
        flexDirection: 'column',
    },

    upvote: {
        flex: 1,
        backgroundColor: "green",
        borderTopLeftRadius: 17
    },

    downvote: {
        flex: 1,
        backgroundColor: "red",
        borderBottomLeftRadius: 17
    },

   voteText: {
        color: "white",
        fontSize: 20,
        padding: 10,
        textAlign: "center",
   },

    voteCount: {
        width:"10%",
        alignSelf: "center",
        paddingLeft: 5

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
        paddingRight: 70,
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