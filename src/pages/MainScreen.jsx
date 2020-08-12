import React, { useState, useEffect } from "react";
import * as Speech from "expo-speech";

import {
  StyleSheet,
  KeyboardAvoidingView,
  View
} from "react-native";

import Storage from "../services/storage";

import AutoScroll from "react-native-auto-scroll";
import InputBox from "../components/InputBox";
import MessageBox from "../components/MessageBox";

import makeClient from "../services/socket";

export default function ({ navigation }) {
  const [messages, setMessages] = useState([]);
  const background = require('../../assets/sarah.png')

  useEffect(() => {
    initServer();

  }, []);

  async function initServer() {
    Sock = await makeClient()
    Sock.handle(handleMessages)
  }

  function handleMessages(message) {
    const { type } = message;

    if (type == "db") {
      setMessages([...message.content]);
      return;
    } else {
      if (Storage.get('use_voice')) {
        Speech.speak(`${message.text}`, {
          voice: "pt-BR-SMTf00",
          rate: 0.5
        });
      }

      setMessages(messages => [...messages, message]);
    }
  }

  function handleSubmit(text) {
    const sender = "user";

    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const date = `${hours}:${minutes}`;

    const message = {
      sender,
      date,
      text
    };

    setMessages(messages => [...messages, message]);
    Sock.send(text)
  }

  return <View
    style={styles.container}>

    <AutoScroll style={styles.scrollContainer}>
      {messages.map((msg, i) => <MessageBox
        key={i}
        sender={msg.sender}
        text={msg.text}
        date={msg.date}
      />)}
    </AutoScroll>

    <InputBox onSubmit={handleSubmit} />


  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "white"
  },
  scrollContainer: {
    flex: 1,
    alignSelf: "stretch",
    marginBottom: 170
  }
});
