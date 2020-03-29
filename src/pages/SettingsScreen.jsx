import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, KeyboardAvoidingView } from "react-native";

import Storage from "../services/storage";

const storage = Storage()

export default function () {
  const [ip, setIp] = useState('')
  const [port, setPort] = useState('')

  useEffect(() => {
    init()
  }, [])


  async function init() {
    setIp( await storage.get_ip() )
    setPort( await storage.get_port() )
  }

  return (
    <KeyboardAvoidingView style={styles.container} >

      <View style={styles.confContainer}>
        <Text style={styles.confTitle}>Host</Text>
        <TextInput
          style={styles.input}
          value={ip}
          onChangeText={setIp}
          placeholder="192.168.1.4"
          onSubmitEditing={ async () => {
            console.log(`new ip: ${ip}`)
            await storage.set_ip(ip)
          }}
        />
      </View>

      <View style={styles.confContainer}>
        <Text style={styles.confTitle}>Port</Text>
        <TextInput
          style={styles.input}
          value={port}
          onChangeText={setPort}
          placeholder="54348"
          onSubmitEditing={ async () => {
            console.log(`new port: ${port}`)
            await storage.set_port(port)
          }}
        />
      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  confTitle: {
    color: '#444',
    fontSize: 15,
    position: "relative",
    top: 0,
    textAlign: "center",
    zIndex: 1
  },
  confContainer: {
    margin: 15,
    padding: 5,
    width: '75%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
    width: '50%',
    height: 40,
    backgroundColor: '#fefefe',
    borderWidth: 0,
    borderColor: '#ddd',
    borderRadius: 10,
    color: '#444',
    paddingHorizontal: 20,
    fontSize: 16,
  },
})
