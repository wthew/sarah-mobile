import React, { useState } from "react";
import styled from 'styled-components'

import { MaterialIcons } from "@expo/vector-icons";

import TextInput from "./TextInput";
import { Row } from "./Containers";
import CommandList from './CommandList'

const Container = styled.View`
  bottom: 0;
  position: absolute;
  width: 100%;
  padding:5px;
  flex-direction: column;
  background-color: ${props => props.theme.background};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  elevation: 15;
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
      setMessage("");
      onSubmit(message);
    }
  }

  function CommandSelected(command) {
    if (command.autoSend) {
      onSubmit(command.text)
      setMessage("")
    }
    else setMessage(command.text + " ")
  }

  return <Container>

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