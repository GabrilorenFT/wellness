import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Header } from '../../components';
import styles from './styles';

export default function MyPerfil() {
  const [form, setForm] = useState({
    name: 'Satoru Gojo',
    email: 'satorugojo@gmail.com',
    idade: '23 Anos',
    peso: '78 KG',
    altura: '1,85 Metros',
    rg: '40.435.812-X',
    cpf: '100.200.300-40',
    celular: '(14) 99600-0770',
    sexo: 'Masculino',
  });

  const handleInputChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const s = styles()

  return (
    <ScrollView style={s.container}>
      <Header/>

      <View style={s.body}>
        <Text style={s.title}>Meus dados</Text>
        <View style={s.imageContainer}>
          <Image
            style={s.profileImage}
            source={{
              uri: 'https://via.placeholder.com/100', // Placeholder para o avatar
            }}
          />
        </View>

        <Text style={s.label}>Nome *</Text>
        <TextInput
          style={s.input}
          value={form.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />

        <Text style={s.label}>Email *</Text>
        <TextInput
          style={s.input}
          value={form.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />

        <Text style={s.label}>Idade *</Text>
        <TextInput
          style={s.input}
          value={form.idade}
          onChangeText={(text) => handleInputChange('idade', text)}
        />

        <Text style={s.label}>Peso *</Text>
        <TextInput
          style={s.input}
          value={form.peso}
          onChangeText={(text) => handleInputChange('peso', text)}
        />

        <Text style={s.label}>Altura *</Text>
        <TextInput
          style={s.input}
          value={form.altura}
          onChangeText={(text) => handleInputChange('altura', text)}
        />

        <Text style={s.label}>RG *</Text>
        <TextInput
          style={s.input}
          value={form.rg}
          onChangeText={(text) => handleInputChange('rg', text)}
        />

        <Text style={s.label}>CPF</Text>
        <TextInput
          style={s.input}
          value={form.cpf}
          onChangeText={(text) => handleInputChange('cpf', text)}
        />

        <Text style={s.label}>Celular *</Text>
        <TextInput
          style={s.input}
          value={form.celular}
          onChangeText={(text) => handleInputChange('celular', text)}
        />

        <Text style={s.label}>Sexo</Text>
        <View style={s.radioGroup}>
          {['Masculino', 'Feminino', 'Nao Definido'].map((option) => (
            <TouchableOpacity
              key={option}
              style={s.radioContainer}
              onPress={() => handleInputChange('sexo', option)}
            >
              <View style={s.radioCircle}>
                {form.sexo === option && <View style={s.radioSelected} />}
              </View>
              <Text style={s.radioLabel}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={s.button}>
          <Text style={s.buttonText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
