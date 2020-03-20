import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Storage from "../services/storage";

import { setupSocket } from "../services/util";

const storage = Storage()

export default function () {
  const [ip, setIp] = useState('')
  const [port, setPort] = useState('')

  useEffect(() => {
    
    init()
  }, [])

  init = async () => {
    let ip = await storage.get('ip') || '192.168.1.1'
    let port = await storage.get('port') || '1234'

    setIp( ip )
    setPort( port )
  }

  async function handleSubmitIp() {
    if (ip.match(/^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/)) {
      await storage.set('ip', ip)
    }
  }

  async function handleSubmitPort() {
    await storage.set('port', port)
  }
  
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container} keyboardVerticalOffset={75}>

      <View style={styles.confContainer}>
        <Text style={styles.confTitle}>Host</Text>
        <TextInput
          style={styles.input}
          value={ip}
          onChangeText={setIp}
          placeholder="192.168.1.4"
        />
        <TouchableOpacity onPress={handleSubmitIp}>
          <MaterialIcons name="save" size={25} color="#039be5" />
        </TouchableOpacity>
      </View>

      <View style={styles.confContainer}>
        <Text style={styles.confTitle}>Port</Text>
        <TextInput
          style={styles.input}
          value={port}
          onChangeText={setPort}
          placeholder="54348"
        />
        <TouchableOpacity onPress={handleSubmitPort}>
          <MaterialIcons name="save" size={25} color="#039be5" />
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  confTitle: {
    width: 50,
    color: '#039be5',
    fontSize: 18
  },
  confContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
    width: '50%',
    height: 50,
    backgroundColor: '#fefefe',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    color: '#333',
    paddingHorizontal: 20,
    fontSize: 16,
    margin: 15
  },
})
