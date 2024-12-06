import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';
import {Statusbar} from '../statusbar';
import {useGlobal} from '../../hooks/useGlobal';
import {getColor, getTranslation} from '../../services';

import NotificationIcon from "../../assets/images/bell.svg";
import UserIcon from "../../assets/images/profile-circle.svg";
import { useNavigation } from '@react-navigation/native';

export const Header = ({}) => {
  const s = styles();
  const {globalProps} = useGlobal();

  const navigation = useNavigation();

  return (
    <>
      <Statusbar/>
      <View style={s.container}>
        <View style={s.content}>
          <TouchableOpacity style={{flexDirection:'row', marginLeft: 20}} onPress={() => navigation.navigate("MyPerfil")}>
          <UserIcon color={"#127848"}/>
          <Text style={s.text} numberOfLines={1}>
            Gabriel
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.buttonNotif} activeOpacity={1}>
            <NotificationIcon
              color={getColor("primary")}
              style={s.icon}
              height={24}
              width={24}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};