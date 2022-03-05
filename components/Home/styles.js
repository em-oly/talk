import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#637CAC',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
        width: '100%',
        textAlign: "center",
        fontFamily: 'monospace',
        fontSize: 60,
        fontWeight: '500'
    },
    input: {
      height: 32,
      width: "20%",
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: "white",
      fontFamily: 'monospace'
    },
  
  });

  export default styles;