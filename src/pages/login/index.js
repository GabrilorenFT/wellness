import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, View, TouchableOpacity, Text, Button, TextInput, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./styles";
import {useGlobal} from '../../hooks/useGlobal';
import {Input, ModalPinPassword, ModalLoading} from '../../components';

import logoName from "../../assets/images/logo-text.png";
import Eye from "../../assets/images/eye.svg";
import EyeSlash from "../../assets/images/eye-slash.svg";
import axios from "axios";

const api = axios.create({baseURL: "http://192.168.29.195:8080/api/"})

export const LoginScreen = () => {
  const {globalProps, setGlobalProps, showToast} = useGlobal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [storageData, setStorageData] = useState(null);
  const [modalLoadingSignIn, setModalLoadingSignIn] = useState(false);
  const navigation = useNavigation();
  const s = styles();

  const SignIn = () => {
    // if (storageData) {
      setModalLoadingSignIn(true);
      if (email == null || email == "") {
        showToast({title: "Aviso", description: "E-mail e senha não foram preenchidas", background: "#E0B54A"});
        setModalLoadingSignIn(false);
      }
      // else if (password != storageData.password) {
      //   showToast({title: "Aviso", description: "Senha inválida", background: "#E0B54A"});
      //   setModalLoadingSignIn(false);
      // }
      else {
        setTimeout(async() => {
          fetchData();
          const storageNameStringify = await AsyncStorage.getItem("@name");
          const storageName = await JSON.parse(storageNameStringify);
          if (!!storageName) await setGlobalProps("setName", storageName);
          await setGlobalProps("setEmail", email);
          await setGlobalProps("setPassword", password);
          await setGlobalProps("setSigned", true);
          setModalLoadingSignIn(false);
        }, 2000);
      };
    // } else {
    //   setModalLoadingSignIn(true);
    //   setTimeout(async() => {
    //     await setGlobalProps("setEmail", email);
    //     await setGlobalProps("setPassword", password);
    //     await setGlobalProps("setSigned", true);
    //     setModalLoadingSignIn(false);
    //   }, 2000);
    // };
  };
  // useEffect(() => {
  //   const _getData = async() => {
  //     const keys = ["@email", "@password"];
  //     const storage_data = await AsyncStorage.multiGet(keys, () => {});
  //     const storage_email = await JSON.parse(storage_data[0][1]);
  //     const storage_password = await JSON.parse(storage_data[1][1]);
  //     if (storage_email && storage_password) setStorageData({email: storage_email, password: storage_password});
  //   };
  //   _getData();
  // }, []);

  async function fetchData(email, password) {
    console.log('a');
      await api.post(`login`, {user: "gustavoranci", pass: "123"}).then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err.response);
      })
      await api.post(`user/create`, {nome: "Ga Ranci", user: "Gabriel", pass: "321", tipo: "aluno"}).then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err.response);
      })
    }
  // useEffect(async() => {

  //   console.log('aa');
  //     fetchData()

  //   }, [])



  return (
    <SafeAreaView style={s.safeareaview}>
      <View style={s.container}>
        <Image source={logoName} style={s.logo} />

        <Input type="text" prop={{
          title: "E-mail ou Telefone",
          value: email,
          keyboard: "email-address",
          setValue: setEmail,
          placeholder: "Digite seu email",
          placeholderFontColor: "#585858",
          fontColor: "white",
          largeTextArea: false,
          titleFontColor: "#FFF",
          }}
        />
        <Input type="text" prop={{
          title: "Senha",
          value: password,
          keyboard: 'default',
          setValue: setPassword,
          placeholder: "Digite sua senha",
          placeholderFontColor: "#585858",
          fontColor: "white",
          largeTextArea: false,
          isPassword: showPassword,
          onPressIcon: setShowPassword.bind(this, !showPassword),
          endIcon: showPassword ? Eye : EyeSlash,
          iconColor: "white",
          titleFontColor: "#FFF",
          }}
        />

        <TouchableOpacity style={s.buttonSignIn} onPress={async() => {
          // await fetchData(email, password)
          await SignIn()
          }}>
          <Text style={s.textButtonSignIn}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={async() => {await fetchData(email, password)}}>
          <Text style={s.title}>Esqueceu sua senha ?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("create-account")}>
          <Text style={s.title}>Criar conta</Text>
        </TouchableOpacity>

        <ModalLoading modalVisible={modalLoadingSignIn} setModalVisible={setModalLoadingSignIn} />

      </View>
    </SafeAreaView>
  )
};