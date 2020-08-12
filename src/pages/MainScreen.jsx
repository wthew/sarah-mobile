import React, { useState, useEffect } from "react";
import * as Speech from "expo-speech";

import {
<<<<<<< HEAD
  StyleSheet,
  KeyboardAvoidingView,
  View
} from "react-native";

import Storage from "../services/storage";

=======
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";

>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
import AutoScroll from "react-native-auto-scroll";
import InputBox from "../components/InputBox";
import MessageBox from "../components/MessageBox";

<<<<<<< HEAD
import makeClient from "../services/socket";
=======
import Client from "../services/socket";
import Storage from "../services/storage";
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9

export default function ({ navigation }) {
  const [messages, setMessages] = useState([]);
  const background = require('../../assets/sarah.png')

  useEffect(() => {
    initServer();

  }, []);

  async function initServer() {
<<<<<<< HEAD
    Sock = await makeClient()
=======
    const host = await Storage.get('host')
    const port = await Storage.get('port')

    Sock = Client( host, port );

>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
    Sock.handle(handleMessages)
  }

  function handleMessages(message) {
    const { type } = message;

    if (type == "db") {
<<<<<<< HEAD
      setMessages([...message.content]);
      return;
    } else {
      if (Storage.get('use_voice')) {
=======
      setMessages(messages => [...message.content]);
      return;
    } else {
      if (message.voice) {
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
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

<<<<<<< HEAD
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
=======
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
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    alignItems: "stretch",
    backgroundColor: "white"
  },
  scrollContainer: {
    flex: 1,
    alignSelf: "stretch",
    marginBottom: 170
=======
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
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
  }
});
