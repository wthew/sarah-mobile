import React, { useState, useEffect, useContext } from "react";
import * as Speech from "expo-speech";

import { View } from "react-native";

import Storage from "../services/storage";

import AutoScroll from "react-native-auto-scroll";
import InputBox from "../components/InputBox";
import MessageBox from "../components/MessageBox";

import makeClient from "../services/socket";
import { ThemeContext } from "styled-components";

const Main = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [voice, setVoice] = useState(false)
  const theme = useContext(ThemeContext)

  useEffect(() => {
    async function initServer() {
      Sock = await makeClient()
      Sock.handle(handleMessages)

      setVoice(await Storage.get('use_voice'))
      Storage.onChangeKey('use_voice', handleVoiceChange)
    } initServer();

    return () => {
      Storage.releaseListener('use_voice', handleVoiceChange)
    }
  }, []);

  async function handleVoiceChange() {
    await setVoice(await Storage.get('use_voice'))
  }

  function handleMessages(message) {
    const { type } = message;

    if (type == "db") {
      setMessages([...message.content])
    } else {
      setMessages(messages => [...messages, message]);
      if (voice && message.silent == false) {
        console.log('falando...')
        Speech.speak(`${message.text}`);
      }
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

  return <View style={{
    flex: 1,
    alignItems: "stretch",
  }}>

    <AutoScroll style={{
      flex: 1,
      alignSelf: "stretch",
      marginBottom: 170,
    }}>
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

export default Main