import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
import {getColor} from "../../../services/getColor";

const styles = () => {
  return StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: getColor("background"),
        padding: 10,
      },
      card: {
        backgroundColor: getColor("box-background"),
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
      },
      title: {
        fontSize: 20,
        fontWeight: "bold",
        color: getColor("font-color"),
        marginBottom: 10,
      },
      image: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
        marginBottom: 10,
      },
      description: {
        fontSize: 14,
        color: getColor("font-color"),
        lineHeight: 20,
      },

   });
};
export default styles;