<<<<<<< HEAD
import React, { useEffect, useState } from 'react'

import { ThemeProvider } from "styled-components";
import Themes from "./services/themes.json";
=======
import React from 'react'
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from "./pages/MainScreen"
import Settings from "./pages/SettingsScreen";

import SettingsButton from "./components/SettingsButton";
import RefreshButton from "./components/RefreshButton";

<<<<<<< HEAD
import Storage from "./services/storage";

=======
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
const Stack = createStackNavigator();

const Routes = () => <NavigationContainer>
  <Stack.Navigator
<<<<<<< HEAD
    headerMode='float'
    screenOptions={{
      headerTintColor: '#039be5',
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 18
      }
    }}>
=======
  
  screenOptions={{
    headerTintColor: '#039be5',
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontSize: 18
    }
  }}>
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
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

<<<<<<< HEAD
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
=======
export default Routes
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
