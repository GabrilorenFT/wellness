import { StyleSheet } from "react-native";
import { getColor } from "../../services";

const styles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: getColor("background"),
          },
          header: {
            backgroundColor: '#00C47E',
            padding: 16,
            flexDirection: 'row',
            alignItems: 'center',
          },
          headerText: {
            fontSize: 20,
            color: '#FFF',
            fontWeight: 'bold',
          },
          body: {
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 8,
          },
          title: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 16,
            color: getColor("font-color"),
          },
          imageContainer: {
            alignItems: 'center',
            marginBottom: 16,
          },
          profileImage: {
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: getColor("font-color"),
          },
          label: {
            fontSize: 16,
            color: getColor("font-color"),
            marginTop: 16,
            marginBottom: 8,
          },
          input: {
            height: 40,
            borderWidth: 1,
            borderColor: getColor("font-color"),
            borderRadius: 8,
            paddingHorizontal: 8,
            backgroundColor: getColor("box-background"),
            color: getColor("font-color")
          },
          radioGroup: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
            color: getColor("font-color")
          },
          radioContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 16,
          },
          radioCircle: {
            width: 20,
            height: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#00C47E',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 8,
          },
          radioSelected: {
            width: 12,
            height: 12,
            borderRadius: 6,
            backgroundColor: '#00C47E',
          },
          radioLabel: {
            fontSize: 14,
            color: getColor("font-color"),
          },
          button: {
            backgroundColor: '#00C47E',
            padding: 16,
            borderRadius: 8,
            alignItems: 'center',
            marginTop: 24,
          },
          buttonText: {
            fontSize: 16,
            color: getColor("font-color"),
            fontWeight: 'bold',
          },
  })
};

export default styles