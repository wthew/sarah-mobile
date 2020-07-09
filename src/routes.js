import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from "./pages/MainScreen"
import Settings from "./pages/SettingsScreen";

import SettingsButton from "./components/SettingsButton";
import RefreshButton from "./components/RefreshButton";

const Stack = createStackNavigator();

const Routes = () => <NavigationContainer>
  <Stack.Navigator
  
  screenOptions={{
    headerTintColor: '#039be5',
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontSize: 18
    }
  }}>
    <Stack.Screen
      name="Chat"
      component={Main}
      options={{
        headerLeft: () => <RefreshButton />,
        headerRight: () => <SettingsButton />,
      }}
    />
    <Stack.Screen
      name="Settings"
      component={Settings}
    />
  </Stack.Navigator>
</NavigationContainer>

export default Routes