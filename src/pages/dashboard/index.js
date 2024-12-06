import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { initialize, requestPermission, readRecords } from 'react-native-health-connect';

import {Card} from './card';
import styles from './styles';
import {Header} from '../../components';
import {useGlobal} from '../../hooks/useGlobal';

import walletIcon from '../../assets/images/wallet.svg';
import financeIcon from '../../assets/images/finance.svg';
import imageCardDefault from '../../assets/images/homeCard.svg';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import foots from "../../assets/images/shoe-prints.png";
import cup from "../../assets/images/Camada_1.png";

const api = axios.create({baseURL: "http://192.168.191.195:8080"})

export const DashboardScreen = () => {
  const {globalProps, setGlobalProps} = useGlobal();
  const s = styles();

  const [stepsToday, setStepsToday] = useState(0);
  const [stepsYesterday] = useState(456); // Valor fixo para ontem
  const [waterToday] = useState(2.5); // Litros consumidos hoje
  const [waterYesterday] = useState(2.2); // Litros consumidos ontem

  useEffect(() => {
    // Simula contagem de passos aumentando com o tempo
    const interval = setInterval(() => {
      setStepsToday((prevSteps) => prevSteps + Math.floor(Math.random() * 4) + 1);
    }, 1000); // Atualiza a cada 1 segundo

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  const navigation = useNavigation();

  const data = [
    {name: 'Carteira', icon: walletIcon},
    {name: 'Financeiro', icon: financeIcon},
    {name: 'INDIQUE \nE GANHE', icon: imageCardDefault},
  ];

  const readSampleData = async () => {
   await api.post("/api/Login", { "user": "Gabriel", "pass": "Teste123"})
   .then((resp) => {
    console.log(resp.data, 1);
   })
   .catch((err) => {
    console.log(err, 2);
   })

  };

  // useEffect(() => {
  //   readSampleData()
  // }, [])

  return (
    <>
      <Header />
      <View style={s.container}>
        {/* <ScrollView horizontal scrollEnabled showsHorizontalScrollIndicator={false} > */}
        <View style={s.listHorizontal}>
          <View style={s.view}>
            <Card name={data[0].name} icon={data[0].icon} onPress={() => navigation.navigate("")}/>
            <Card name={data[1].name} icon={data[1].icon} />
          </View>
          <Card
            name={data[2].name}
            icon={data[2].icon}
            styleContainer={s.indicate}
            styleIcon={s.icon}
            iconHeight={121}
            iconWidth={126}
            styleText={s.text}
          />
        </View>
        <View style={s.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 360}}>
          <Image source={foots} />
            <Text style={s.value}>{stepsToday}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={s.label}>Passos dados hoje</Text>
            <Text style={s.subtext}>Ontem {stepsYesterday}</Text>
          </View>
        </View>
        <View style={s.divider} />
        {/* Consumo de água */}
        <View style={s.card}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 350}}>
          <Image source={cup} />
          <Text style={s.value}>{waterToday}L</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={s.label}>Litros consumidos hoje</Text>
            <Text style={s.subtext}>Ontem {waterYesterday}L</Text>
          </View>
        </View>
      </View>
    </>
  );
};
