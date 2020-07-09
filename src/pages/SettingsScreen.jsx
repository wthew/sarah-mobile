import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import CommandsSettings from "../components/CommandsSettings";
import GeralSettings from "../components/GeralSettings";

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrolContainer: {
    flex: 1,
    alignSelf: "stretch"
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
