import React from 'react'

import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from "./pages/MainScreen"
import Settings from "./pages/SettingsScreen";

import SettingsButton from "./components/SettingsButton";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator screenOptions={{
        headerTintColor: '#039be5',
      }}>
        <Stack.Screen
          name="Sarah"
          component={Main}
          options={{
            headerRight: () => <SettingsButton  />,
          }}
        />
        <Stack.Screen 
          name="Settings" 
          component={Settings} 
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}


