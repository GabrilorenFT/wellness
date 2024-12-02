import { StyleSheet } from "react-native";
import { getColor } from "../../../services";

const styles = () => {
    return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: getColor("background"),
      padding: 16,
    },
    title: {
      fontSize: 18,
      color: getColor("font-color"),
      marginBottom: 16,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: getColor("font-color"),
      marginBottom: 8,
    },
    text: {
      fontSize: 16,
      color: getColor("font-color"),
      marginBottom: 8,
    },
    picker: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 16,
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 16,
      color: getColor("font-color"),
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: "flex-end",
    },
    button: {
      backgroundColor: '#333',
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
    },
    cancelButton: {
      flex: 1,
      backgroundColor: '#555',
      padding: 12,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      marginRight: 8,
    },
    sendButton: {
      flex: 1,
      backgroundColor: getColor("primary-light"),
      padding: 12,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      marginLeft: 8,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
      marginLeft: 10
    },
  })
};

export default styles