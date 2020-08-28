import React, { useEffect, useState, useContext } from 'react'

import { ThemeProvider, ThemeContext } from "styled-components";
import Themes from "./services/themes.json";

import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';

import RefreshButton from "./components/RefreshButton";
import SettingsButton from "./components/SettingsButton";

import Chat from "./pages/ChatScreen"
import Settings from "./pages/SettingsScreen";

import Storage from "./services/storage";
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// const Routes = () => {
//   const theme = useContext(ThemeContext)

// }

const Routes = () => {
  const theme = useContext(ThemeContext)
  return <Stack.Navigator
    headerMode='screen'
    mode='card'
    screenOptions={{
      headerTintColor: theme.highlight,
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 18
      },
      headerStyle: {
        elevation: 0, //for android
        shadowOpacity: 0, //for ios
        borderBottomWidth: 0, //for ios
      }
    }}>
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={{
        headerLeft: () => <RefreshButton />,
        headerRight: () => <SettingsButton />,
      }}
    />

    <Stack.Screen name='Settings' component={Settings} />
  </Stack.Navigator>
}

export default function () {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const init = async () => {
      Storage.onChangeKey('theme', handlethemeChange )
      setTheme(await Storage.get('theme'))
    }; init()

    return () => {
      Storage.releaseListener('theme', handlethemeChange)
    }
  })
  const handlethemeChange = async () => {
    const newTheme = await Storage.get('theme')
    setTheme(newTheme)
  }

  return <ThemeProvider theme={Themes[theme]}>
    <StatusBar
      backgroundColor={Themes[theme].background}
      barStyle={theme == 'dark' ? 'light-content' : 'dark-content'} />
    <NavigationContainer theme={theme == 'dark' ? DarkTheme : DefaultTheme}>
      <Routes />
    </NavigationContainer>
  </ThemeProvider>
}
