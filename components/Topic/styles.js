import { StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#637CAC',
        height: '100%',
    },

    promptContainer: {
        backgroundColor: 'white',
        marginBottom: 10,
        width: Dimensions.get('window').width * .7,
        borderWidth: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },

    title: {
        marginTop: '3%',
        width: '100%',
        textAlign: "center",
        fontFamily: 'monospace',
        fontSize: 60,
        fontWeight: '500'
    },
    
    text: {
        fontFamily: 'monospace',
        fontSize: 14,
        padding: 10,
        fontWeight: '500',
        alignSelf: 'center',
        flex: 1,
        flexWrap: 'wrap'
    },
    hashtags: {
        fontFamily: 'monospace',
        color: '#808080',
        fontSize: 12,
        fontWeight: '500',
    }
});

export default styles; 