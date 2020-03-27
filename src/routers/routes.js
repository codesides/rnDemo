import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './tabs';
import Details from '../views/Details';

const Stack = createStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator
      //屏幕共享样式
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{title: 'Details'}}
      />
    </Stack.Navigator>
  );
}
