import React, { useState, useEffect } from "react";
import * as Speech from "expo-speech";

import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";

import AutoScroll from "react-native-auto-scroll";
import InputBox from "../components/InputBox";
import MessageBox from "../components/MessageBox";

import Client from "../services/socket";
import Storage from "../services/storage";

export default function ({ navigation }) {
  const [messages, setMessages] = useState([]);
  const background = require('../../assets/sarah.png')

  useEffect(() => {
    initServer();

  }, []);

  async function initServer() {
    const host = await Storage.get('host')
    const port = await Storage.get('port')

    Sock = Client( host, port );

    Sock.handle(handleMessages)
  }

  function handleMessages(message) {
    const { type } = message;

    if (type == "db") {
      setMessages(messages => [...message.content]);
      return;
    } else {
      if (message.voice) {
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

  return (
    <ImageBackground
      style={styles.bg}
      source={background}
      resizeMode="cover">
      <KeyboardAvoidingView
        behavior="height"
        style={styles.container}
        keyboardVerticalOffset={80}>

        <AutoScroll style={styles.scrollContainer}>
          {messages.map((msg, i) => (
            <MessageBox
              key={i}
              sender={msg.sender}
              text={msg.text}
              date={msg.date}
            />
          ))}
        </AutoScroll>
        <InputBox onSubmit={handleSubmit} />

      </KeyboardAvoidingView>

    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  scrollContainer: {
    flex: 3,
    alignSelf: "stretch"
  },
  bg: {
    flex: 1,
    justifyContent: "center",
  }
});
