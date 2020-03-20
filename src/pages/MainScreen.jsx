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

import { setupSocket } from "../services/util";

const storage = Storage();

export default function({ navigation }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    initServer();

  }, []);

  async function initServer() {
    let ip = (await storage.get("ip")) || "192.168.1.1";
    let port = (await storage.get("port")) || "1234";

    Sock = Client(ip, port);

    Sock.handle(handleMessages);
  }

  function handleMessages(message) {
    const { type } = message;

    if (type == "db") {
      setMessages(messages => [...message.content]);
      return;
    } else {
      console.log(message);

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
    Sock.send(text);
  }

  return (
    <ImageBackground style={styles.bg}>
      <KeyboardAvoidingView
        behavior="height"
        style={styles.container}
        keyboardVerticalOffset={80}
      >
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
    alignItems: "center",
    padding: 10
  },
  scrollContainer: {
    flex: 1,
    alignSelf: "stretch",
    marginBottom: 70
  },
  bg: {
    width: "100%",
    height: "100%",
  }
});
