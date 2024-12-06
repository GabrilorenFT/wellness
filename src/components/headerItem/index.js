import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import back from "../../assets/images/BackIcon.png"; // Ícone de voltar

export const HeaderItem = ({ title, isBack = false }) => {
  const s = styles();
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={s.container}>
      <View style={s.content}>
        {/* Botão de voltar - exibido apenas se `isBack` for true */}
        {isBack && (
          <TouchableOpacity onPress={handleBackPress}>
            <Image source={back} style={{ width: 24, height: 24 }} resizeMode="contain" />
          </TouchableOpacity>
        )}

        {/* Nome da Tela */}
        <Text style={[s.text, { marginLeft: isBack ? 10 : 0 }]}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderItem;
