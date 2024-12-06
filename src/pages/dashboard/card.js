import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Dimensions, useColorScheme} from 'react-native';
import {useGlobal} from '../hooks/useGlobal';

import {} from '../../components';
import {getColor} from "../../services";

import cardIconDefault from '../../assets/images/plus.svg';

export const Card = ({name, icon, styleContainer, styleText, styleIcon, iconWidth, iconHeight, onPress}) => {
  const isDarkMode = useColorScheme() === "light";
  const s = styles();
  const Icon = icon || cardIconDefault;
  return (
    <TouchableOpacity style={styleContainer ? styleContainer : s.cardContainer} onPress={onPress}>
      <Icon width={iconWidth? iconWidth : 56} height={iconHeight ? iconHeight : 54} color={getColor("font-color")} style={styleIcon ? styleIcon : null}/>
      <Text style={styleText ? styleText : s.cardName}>{name}</Text>
    </TouchableOpacity>
  )
};

const {width, height} = Dimensions.get("window");
const styles = () => {
  return StyleSheet.create({
    cardContainer: {
      marginTop: 20,
      height: 121,
      elevation: 20,
      borderRadius: 6,
      // paddingHorizontal: 15,
      marginHorizontal: 15,
      marginTop: "20%",
      width: width*0.4, //40% screen
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getColor('box-background'),
    },
    cardName: {
      fontSize: 16,
      color: getColor('font-color'),
      fontWeight: 'bold'
    },
  });
};