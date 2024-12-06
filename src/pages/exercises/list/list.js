import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import {getColor} from '../../../services';
import {TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ExercisesList = ({
  titulo,
  imagem,
  area_afetada,
  titulo1,
  imagem1,
  exercicio1,
  titulo2,
  imagem2,
  exercicio2}) => {
  const s = styles();
  console.log(imagem);
  const color1 = getColor('primary-light');
  const color2 = getColor('background');

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ExerciseDescription", {
      area_afetada: area_afetada,
      titulo1: titulo1,
      imagem1: imagem1,
      exercicio1: exercicio1,
      titulo2: titulo2,
      imagem2: imagem2,
      exercicio2: exercicio2
    })}>
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
    </TouchableOpacity>
  );
};
