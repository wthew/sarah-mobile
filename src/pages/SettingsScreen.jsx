import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native-appearance';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import CommandsSettings from "../components/CommandsSettings";
import GeralSettings from "../components/GeralSettings";

import VoiceSettings from "../components/Voice";

export default function () {
  const colorScheme = useColorScheme();


  return <ScrollView style={styles.scrolContainer}>

    <Text>{colorScheme}</Text>

    <View
      style={styles.container}>

      <View style={styles.tabContainer}>
        <Text style={styles.tabTitle}>Geral</Text>
      </View>

      <GeralSettings />

      <View style={styles.tabContainer}>
        <Text style={styles.tabTitle}>Mensagens Rápidas</Text>
      </View>

      <CommandsSettings />

      <View style={styles.tabContainer}>
        <Text style={styles.tabTitle}>Voz</Text>
      </View>

      <VoiceSettings />

    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrolContainer: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: 'white'
  },
  tabContainer: {
    borderColor: '#039be5',
    borderBottomWidth: 2,
    margin: 5,
    padding: 5
  },
  tabTitle: {
    color: '#039be5',
    fontSize: 16
  },

})
