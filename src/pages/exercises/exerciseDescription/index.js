import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import styles from './styles';
import { Header } from '../../../components';
import HeaderItem from '../../../components/headerItem';

export default function ExerciseDescription({route}) {
    const {area_afetada,
        titulo1,
        imagem1,
        exercicio1,
        titulo2,
        imagem2,
        exercicio2,} = route.params;

    const s = styles();

    return (
        <>
        <HeaderItem title={area_afetada} isBack={true}/>
        <ScrollView style={s.container}>
          {/* Primeiro Exercício */}
          <View style={s.card}>
            <Text style={s.title}>{titulo1}</Text>
            <Image source={imagem1} style={s.image} />
            <Text style={s.description}>{exercicio1}</Text>
          </View>

          {/* Segundo Exercício */}
          <View style={s.card}>
            <Text style={s.title}>{titulo2}</Text>
            <Image source={imagem2} style={s.image} />
            <Text style={s.description}>{exercicio2}</Text>
          </View>
        </ScrollView>
        </>
      );

}