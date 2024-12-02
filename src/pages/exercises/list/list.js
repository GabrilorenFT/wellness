import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { getColor } from '../../../services';

export const ExercisesList = ({titulo, imagem}) => {
  const s = styles();
  console.log(imagem);
  const color1 = getColor("primary-light")
  const color2 = getColor("background")

  return (
    <LinearGradient
      colors={[color1, color2]} // Cores do degradê (ajuste conforme desejado)
      style={s.gradient}
      start={{x: 0, y: 0}}
      end={{x: 4, y: 0}}>
      <View style={s.container}>
        <Text style={s.title}>{titulo}</Text>
        <Image source={imagem} style={s.image} />
      </View>
    </LinearGradient>
  );
};
