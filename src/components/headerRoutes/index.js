import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getColor } from '../../services';
import styles from './styles';

export const HeaderRoutes = ({ title }) => {
  const s = styles();
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={s.container}>
      <View style={s.content}>

        {/* Nome da Tela */}
        <Text style={s.text}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderRoutes;
