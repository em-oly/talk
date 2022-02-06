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
        borderTopLeftRadius: 15
    },

    downvote: {
        flex: 1,
        backgroundColor: "red",
        borderBottomLeftRadius: 15
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
    usernameAndBody: { 
        
    },

    text: {
        paddingRight: 70,
        marginBottom: 5,
        flexWrap: "wrap",
        fontFamily: 'monospace',
    }
});

export default styles; 