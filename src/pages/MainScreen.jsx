import React, { useState, useEffect } from 'react';
import * as Speech from 'expo-speech';

import { ImageBackground, StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native";

import InputBox from "../components/InputBox";
import MessageBox from "../components/MessageBox";

import Client from "../services/socket"
import Storage from "../services/storage";

import { setupSocket } from "../services/util";

const storage = Storage()

export default function ({ navigation }) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    async function init() {
      const { 
        ip, 
        port 
      } = await setupSocket( await storage.get('ip'), await storage.get('port'))      

      Sock = Client( ip, port )

      Sock.handle(handleMessages)
    }
    init()

  }, [])

  function handleMessages(text) {
    const sender = 'sarah'
    setMessages(messages => [...messages, { sender, text }])

    Speech.speak(`${text}`,{
      voice: 'pt-BR-SMTf00',
      rate: 0.5
    })
  }
  function handleSubmit(text) {
    const sender = 'me'
    setMessages(messages => [...messages, { sender, text }])
    Sock.send(text)
  }
  function handleChangeScreen() {
    navigation.navigate('Settings')
  } 
  return (
    <ImageBackground style={styles.bg}>
      <KeyboardAvoidingView behavior='padding' style={styles.container} keyboardVerticalOffset={75}>
        <ScrollView style={styles.scrollContainer}>


          {messages.map((msg, i) => (
            <MessageBox key={i} sender={msg.sender} text={msg.text} />
          ))}
        </ScrollView>
      </KeyboardAvoidingView>

      <InputBox onSubmit={handleSubmit} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    alignSelf: 'stretch',
    marginBottom: 75
  },
  bg: {
    width: '100%',
    height: '100%'
  }
})
