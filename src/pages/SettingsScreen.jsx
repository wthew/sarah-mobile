import React, { useEffect } from 'react';
<<<<<<< HEAD
import { useColorScheme } from 'react-native-appearance';
=======
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import CommandsSettings from "../components/CommandsSettings";
import GeralSettings from "../components/GeralSettings";

<<<<<<< HEAD
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
=======
export default function () {

  useEffect(() => {
    init()
  }, [])


  async function init() {
    
  }

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={styles.container}
      keyboardVerticalOffset={-200}>

      <ScrollView 
        keyboardShouldPersistTaps="always" 
        style={styles.scrolContainer}>

        <View style={styles.tabContainer}>
          <Text style={styles.tabTitle}>Geral</Text>
        </View>
        
        <GeralSettings />

        <View style={styles.tabContainer}>
          <Text style={styles.tabTitle}>Mensagens Rápidas</Text>
        </View>

       <CommandsSettings /> 

        
      </ScrollView>
    </KeyboardAvoidingView>
  );
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
  },
  scrolContainer: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: 'white'
=======
    backgroundColor: 'white'
  },
  scrolContainer: {
    flex: 1,
    alignSelf: "stretch"
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
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
<<<<<<< HEAD

=======
  
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
})
