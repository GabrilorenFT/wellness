import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Exams } from '../pages';
import NewExam from '../pages/exams/newExam';


const Stack = createStackNavigator();

export default function ExamsRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Exams">
      <Stack.Screen name="Exams" component={Exams} />
      <Stack.Screen name="NewExam" component={NewExam} />
    </Stack.Navigator>
  );
}
