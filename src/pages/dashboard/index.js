import React, { useEffect } from 'react';
import { View } from 'react-native';
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

const api = axios.create({baseURL: "http://192.168.191.195:8080"})

export const DashboardScreen = () => {
  const {globalProps, setGlobalProps} = useGlobal();
  const s = styles();

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
            <Card name={data[0].name} icon={data[0].icon} />
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
        {/* </ScrollView> */}

        {/* <ListCards data={data} /> */}
      </View>
    </>
  );
};
