import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useGlobal } from '../../hooks/useGlobal';
import styles from './styles';
import { Header } from '../../components';
import { useNavigation } from '@react-navigation/native';
import HeaderRoutes from '../../components/headerRoutes';

export const Queries = () => {
  const { globalProps, setGlobalProps } = useGlobal();
  const s = styles();

  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState('Disponível');
  const [selectedExam, setSelectedExam] = useState(null);

  const exams = [
    {
      id: 1,
      type: 'Otorrinolaringologista',
      hospital: 'Dr. Alberto Guimarães',
      date: '11/12/2023',
      icon: require('../../assets/images/Vector.png'),
    },
    {
      id: 2,
      type: 'Dentista',
      hospital: 'Dr. Jonathan Gonçalves',
      date: '11/12/2023',
      icon: require('../../assets/images/DenteIcon.png'),
    },
    {
      id: 3,
      type: 'Neurologista',
      hospital: 'Dra. Rebecca Andrade',
      date: '11/12/2023',
      icon: require('../../assets/images/CerebroIcon.png'),
    },
    {
      id: 4,
      type: 'Cardiologista',
      hospital: 'Dr. Silveira Anderson',
      date: '11/12/2023',
      icon: require('../../assets/images/BatidaCoracaoIcon.png'),
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleExamClick = (examId) => {
    setSelectedExam(examId);
  };

  const EditButton = () => {
    return (
      <View>
        <TouchableOpacity style={{
          width: 60,
          height: 60,
          position: 'absolute',
          bottom: 20,
          right: 20,
          borderRadius: 60/2,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.5,
          shadowRadius: 1,
          elevation: 15,
          backgroundColor: '#1DBF73'
        }} onPress={() => navigation.navigate("newQueries")}>
          <Image source={require('../../assets/images/AdicionarIcon.png')}/>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <>
      <HeaderRoutes title={"CONSULTAS"}/>
      <View style={s.container}>
        {/* Tabs */}
        <View style={s.tabs}>
          <TouchableOpacity
            style={[s.tab, activeTab === 'Disponível' && s.tabActive]}
            onPress={() => handleTabChange('Disponível')}
          >
            <Text style={activeTab === 'Disponível' ? s.tabTextActive : s.tabText}>Disponível</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[s.tab, activeTab === 'Histórico' && s.tabActive]}
            onPress={() => handleTabChange('Histórico')}
          >
            <Text style={activeTab === 'Histórico' ? s.tabTextActive : s.tabText}>Histórico</Text>
          </TouchableOpacity>
        </View>

        {/* Exam List */}
        <ScrollView contentContainerStyle={s.examList}>
          {exams.map((exam) => (
            <TouchableOpacity
              key={exam.id}
              onPress={() => handleExamClick(exam.id)}
              style={[
                s.examCard,
                selectedExam === exam.id ? s.examCardActive : s.examCardInactive,
              ]}
            >
              <Image source={exam.icon} style={{ width: 22, height: 22 }} />
              <View style={s.examDetails}>
                <Text style={[s.examType, selectedExam === exam.id && s.examTextActive]}>
                  {exam.type}
                </Text>
                <Text style={[s.examHospital, selectedExam === exam.id && s.examTextActive]}>{exam.hospital}</Text>
              </View>
              <Text style={[s.examDate, selectedExam === exam.id && s.examTextActive]}>{exam.date}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <EditButton />
      </View>
    </>
  );
};
