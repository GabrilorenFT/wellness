import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Picker} from 'react-native';
import {Header, Input} from '../../../components';
import styles from './styles';
import CancelIcon from '../../../assets/images/cross-circle.svg'
import SendIcon from '../../../assets/images/paper-plane.svg'

export default function NewExam() {
  const [currentScreen, setCurrentScreen] = useState('menu'); // Estado para alternar telas
  const [selectedDoctor, setSelectedDoctor] = useState(null); // Estado para o médico selecionado
  const [selectedTime, setSelectedTime] = useState(null); // Estado inicial para mostrar a tela inicial

  const s = styles();

  const RenderMenu = () => {
    return (
      <>
      <Header />
        <View style={s.container}>
          <Text style={s.title}>Selecione o tipo de exame que deseja:</Text>
          <TouchableOpacity
            style={s.button}
            onPress={() => setCurrentScreen('consulta')}>
            <Text style={s.buttonText}>Sangue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={s.button}
            onPress={() => setCurrentScreen('consulta')}>
            <Text style={s.buttonText}>Geral</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={s.button}
            onPress={() => setCurrentScreen('consulta')}>
            <Text style={s.buttonText}>Urina</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const RenderConsulta = () => {
    return (
      <>
      <Header />
        <View style={s.container}>
          <Text style={s.subtitle}>Novo exame</Text>
          <Text style={s.text}>
            Caso queira ser atendido por um médico específico, selecione-o aqui:
          </Text>

          <View style={{marginVertical: 20}} />

          {/* Usando o InputSelect para o campo de médicos */}
          <Input
            type="select"
            prop={{
              title: 'Médico',
              value: selectedDoctor,
              setValue: setSelectedDoctor,
              request: [
                {id: 1, name: 'Dr. Satoru Gojo'},
                {id: 2, name: 'Dr. Suguru Geto'},
                {id: 3, name: 'Dra. Mei Mei'},
              ],
              itemIdHash: 'id',
              itemNameHash: 'name',
            }}
          />

          <View style={{marginVertical: 20}} />

          {/* Usando o InputSelect para o campo de horários */}
          <Input
            type="select"
            prop={{
              title: 'Horário',
              value: selectedTime,
              setValue: setSelectedTime,
              request: [
                {id: 1, name: '09:00'},
                {id: 2, name: '10:00'},
                {id: 3, name: '11:00'},
              ],
              itemIdHash: 'id',
              itemNameHash: 'name',
            }}
          />

          <View style={{marginVertical: 20}} />

          <Text style={s.price}>Preço: R$ 180,00</Text>

          <View style={s.buttonContainer}>
            <TouchableOpacity
              style={s.cancelButton}
              onPress={() => setCurrentScreen('menu')}>
              <CancelIcon color={"white"}/>
              <Text style={s.buttonText}>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.sendButton}>
              <SendIcon color={"white"}/>
              <Text style={s.buttonText}>ENVIAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return currentScreen === 'menu' ? <RenderMenu /> : <RenderConsulta />;
}
