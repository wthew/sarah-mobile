import React, { useEffect, useState } from 'react'

import { ThemeProvider } from "styled-components";
import Themes from "./services/themes.json";

import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from "./pages/MainScreen"
import Settings from "./pages/SettingsScreen";

import SettingsButton from "./components/SettingsButton";
import RefreshButton from "./components/RefreshButton";

import Storage from "./services/storage";

const Stack = createStackNavigator();

const Routes = () => <NavigationContainer>
  <Stack.Navigator
    headerMode='float'
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

export default function () {
  const [theme, setTheme] = useState({})

  useEffect(()=>{
    const init = async () => {
      setTheme(await Storage.get('theme') || 'dark')
      console.log(theme);
    }; init()
    
  })
  return <ThemeProvider theme={Themes[theme]}>
    <Routes />
  </ThemeProvider>
}
