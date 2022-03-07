import { StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    commentContainer: {
        marginTop: 10,
        backgroundColor: 'white',
        width: Dimensions.get('window').width * .9,
        borderWidth: 2,
        borderRadius: 20,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    voteButtons: {
        marginLeft: 10,
        alignSelf: 'center',
        flexDirection: 'column',
    },

    voteCount: {
        margin: 20,
        alignSelf: "center",

    },

    voteStyle: {
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: 'monospace'
    },

    commentText: {
        flexWrap: "wrap",
        flex: 1,
        marginBottom: 10,
        marginTop: 5,
        paddingRight: 20,
    },

    userText: { 
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        
    },

    bodyText: {
        fontFamily: 'monospace',
    },

    
    badgeButton: {
        width: "5%",
        alignSelf: 'center',
        
    },
    flagButton: {
        width: "10%",
        margin: 10,
        alignSelf: 'center',
        
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        margin: 20,
        marginTop: 200,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        width: Dimensions.get('window').width * .8,
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
    buttonClose: {
        backgroundColor: "#2196F3",
      },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom: 20,
        alignSelf: "center",
        right: 10
      },

      badge: {
        // flex: 1,
    },

    badgeCount: {
      // flex: 1,
      // margin: 10,

  },

  badgeStyle: {
    fontWeight: "bold",
    fontFamily: 'monospace'
},

  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },

  badgeInnerContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingRight: 10
  }

    
});

export default styles; 