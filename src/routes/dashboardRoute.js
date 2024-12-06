import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen, Exams } from '../pages';
import NewExam from '../pages/exams/newExam';
import MyPerfil from '../pages/myPerfil';


const Stack = createStackNavigator();

export default function DashboardRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="MyPerfil" component={MyPerfil} />
    </Stack.Navigator>
  );
}
