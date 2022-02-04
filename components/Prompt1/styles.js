import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 40,
    },
    button: {
        backgroundColor: 'white',
        height: 100,
        width: '70%',
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
    
    text: {
        fontFamily: 'monospace',
        fontSize: 12,
        padding: 10,
        fontWeight: '500',
        alignSelf: 'center',
        flex: 1,
        flexWrap: 'wrap'
    },
    hashtags: {
        fontFamily: 'monospace',
        color: '#808080',
        fontSize: 10,
        fontWeight: '500',
    }

});

export default styles; 