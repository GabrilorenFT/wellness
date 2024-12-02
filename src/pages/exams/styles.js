import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1B1B1B',
    },
    tabs: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 10,
    },
    tab: {
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    tabActive: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#1DBF73',
      borderRadius: 10,
    },
    tabText: {
      color: 'white',
      fontSize: 16,
    },
    tabTextActive: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    examList: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    examCard: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20, // Increased padding for a larger card
      borderRadius: 15,
      marginBottom: 15,
      backgroundColor: '#F2F2F2',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
      width: width - 40, // Width relative to screen size
    },
    examCardActive: {
      backgroundColor: '#1DBF73',
    },
    examCardInactive: {
      backgroundColor: '#F2F2F2', // Light gray background when not selected
    },
    examDetails: {
      flex: 1,
      marginLeft: 15, // Increased margin for spacing between icon and text
    },
    examType: {
      fontSize: 18, // Larger font size
      fontWeight: 'bold',
      color: 'black',
    },
    examHospital: {
      color: 'gray',
      fontSize: 16, // Slightly larger font size
      marginTop: 5,
    },
    examDate: {
      color: 'gray',
      fontSize: 14, // Adjusted font size for date
    },
    examTextActive: {
      color: 'white',
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#1B1B1B',
      paddingVertical: 10,
    },
    navItem: {
      padding: 10,
    },
  });
};

export default styles;
