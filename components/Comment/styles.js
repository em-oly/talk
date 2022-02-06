import { StyleSheet, Dimensions} from "react-native";
import { YellowBox } from "react-native-web";

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
        flex: 2,
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
        justifyContent: "center",
        paddingLeft: 5

    },
    usernameAndBody: {
        borderLeftWidth: 2,
        position: "absolute",
        backgroundColor: "yellow",
        flex: 4,
    },

    text: {
        flexWrap: "wrap",
    }
});

export default styles; 