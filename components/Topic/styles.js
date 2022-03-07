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
        },
    },

    usernameStyle: {
      alignSelf: 'flex-end',
      padding: 10,
      fontFamily: 'monospace',
      fontSize: 20,
  },

    title: {
        marginTop: '3%',
        width: '100%',
        textAlign: "center",
        fontFamily: 'monospace',
        fontSize: 60,
        fontWeight: '500',
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
    },

    commentsContainer: {
     
    },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 20,
    alignSelf: "flex-end",
    right: 10
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
  
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: Dimensions.get('window').width * .9,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: Dimensions.get('window').width * .7, height:200, textAlignVertical: 'top'
  },
});

export default styles; 