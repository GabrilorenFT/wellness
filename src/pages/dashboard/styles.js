import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
import {getColor} from "../../services/getColor";

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 40,
      backgroundColor: getColor('background'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    view: {
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "flex-start"
    },
    indicate: {
      marginTop: 30,
      height: 115,
      elevation: 20,
      borderRadius: 6,
      backgroundColor: getColor('box-background'),
    },
    listHorizontal: {
      flex: 1,
    },
    text: {
      position: "absolute",
      top: 10,
      left: 40,
      fontSize: 36,
      color: getColor('font-color'),
      fontWeight: 'bold'
    },
    icon: {
      justifyContent: 'flex-end',
      alignSelf: "flex-end"
    },
    card: {
      flexDirection: 'column',
      justifyContent: "space-between",
      marginVertical: 20,
    },
    // icon: {
    //   fontSize: 40,
    //   marginRight: 15,
    // },
    value: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#34c759',
    },
    label: {
      fontSize: 16,
      fontWeight: '500',
      color: getColor('font-color'),
      marginRight: 120
    },
    subtext: {
      fontSize: 14,
      color: getColor('box-border-color'),
    },
    divider: {
      height: 1,
      width: 370,
      backgroundColor: '#fff',
      marginVertical: 20,
    },

   });
};
export default styles;