import React, { useState } from "react";
import styled from 'styled-components'

import { MaterialIcons } from "@expo/vector-icons";

import TextInput from "./TextInput";
import { Row } from "./Containers";
import CommandList from './CommandList'

const Container = styled.View`
<<<<<<< HEAD
  bottom: 0;
  position: absolute;
  width: 100%;
  padding:5px;
  flex-direction: column;
  background-color: ${props => props.theme.background};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  elevation: 15;
=======
  height: 150px;
  bottom: 0;
  padding:5px;
  flex-direction: column;
  background-color: white;
  border-top-width: 2px;
  border-top-color: #039be5;
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
`

const Touchable = styled.TouchableOpacity`
  margin: 0 5px 0 15px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-color: #039be5;
  border-width: 2px;
  border-radius: 25px;
`

const InputBox = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  function handleSubmit() {
    if (message.trim() != "") {
<<<<<<< HEAD
      setMessage("");
      onSubmit(message);
=======
      onSubmit(message);
      setMessage("");
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
    }
  }

  function CommandSelected(command) {
<<<<<<< HEAD
    if (command.autoSend) {
      onSubmit(command.text)
      setMessage("")
    }
    else setMessage(command.text + " ")
  }

  return <Container>
=======
    if (command.autoSend) onSubmit(command.text)
    else setMessage(command.text + " ")
  }

  return <Container >
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9

    <Row>
      <CommandList handleCommandSelected={CommandSelected} />
    </Row>

    <Row>
      <TextInput
        placeholder="Digite Para Mim Aqui..."
        autoCorrect={true}
        value={message}
        handleChangeText={setMessage}
        autoFocus={true} />

      <Touchable onPress={handleSubmit} >
        <MaterialIcons name="send" size={20} color="#039be5" />
      </Touchable>
    </Row>

  </Container >
}

export default InputBox