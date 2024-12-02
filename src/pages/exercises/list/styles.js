import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
import {getColor} from '../../../services';

const styles = () => {
  return StyleSheet.create({
    gradient: {
        borderRadius: 12,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
        elevation: 3,
      },
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 12,
        padding: 10,
      },
      title: {
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        color: getColor("primary"),
        paddingLeft: 10,
      },
      image: {
        width: 150,
        height: 100,
        borderRadius: 10,
      },
   });
};
export default styles;