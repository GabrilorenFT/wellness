import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen, Exams, Exercises } from '../pages';
import NewExam from '../pages/exams/newExam';
import MyPerfil from '../pages/myPerfil';
import ExerciseDescription from '../pages/exercises/exerciseDescription';


const Stack = createStackNavigator();

export default function ExercisesRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Exercises">
      <Stack.Screen name="Exercises" component={Exercises} />
      <Stack.Screen name="ExerciseDescription" component={ExerciseDescription} />
    </Stack.Navigator>
  );
}
