import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Queries } from '../pages';
import NewQuerie from '../pages/queries/newQuerie';

const Stack = createStackNavigator();

export default function QuerieRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Queries">
      <Stack.Screen name="Queries" component={Queries} />
      <Stack.Screen name='newQueries' component={NewQuerie} />
    </Stack.Navigator>
  );
}
