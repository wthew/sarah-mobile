import React, { useContext } from 'react';

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";

import { createStackNavigator } from '@react-navigation/stack';

import CommandsSettings from "../components/CommandsSettings";
import GeralSettings from "../components/GeralSettings";

import VoiceSettings from "../components/VoiceSettings";
import styled, { ThemeContext } from 'styled-components';


const Stack = createStackNavigator();


const Tab = ({ label }) => {
  const theme = useContext(ThemeContext)

  return <View style={{

  }}>
    <Text style={{
      color: theme.highlight,
      fontSize: 16
    }}>
      {label}
    </Text>

  </View>
}

const Settings = () => {

  return <ScrollView style={{
      flex: 1,
      alignSelf: "stretch",
      padding: 10
    }}>


    <View
      style={{
        flex: 1,
      }}>

      <Tab label="Geral" />

      <GeralSettings />

      <Tab label="Mensagens Rápidas" />

      <CommandsSettings />

      <Tab label="Voz" />

      <VoiceSettings />

    </View>
  </ScrollView>
}

export default Settings
// export default function () {
//   const theme = useContext(ThemeContext)
//   return <Stack.Navigator
//     headerMode='float'
//     screenOptions={{
//       headerTintColor: theme.highlight,
//       animationEnabled: true
      
//     }}>
//     <Stack.Screen
//       name="Settings"
//       component={Settings}
//     />
//   </Stack.Navigator>
// }