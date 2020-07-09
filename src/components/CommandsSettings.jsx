import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Text, Switch } from 'react-native';

import { Row } from "./Containers";
import Button from "./Button";
import TextInput from "./TextInput";
import CommandList from './CommandList'

import Storage from "../services/storage";

// Mini-Components
const Form = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const SwitchContainer = styled.View`
  flex: 1;
  margin: auto;
  align-items: center;
`

const SwitchComponent = ({ toggleSwitch, autoSend }) => <SwitchContainer >
  <Text style={{ color: "#039be5", fontWeight: "bold" }}>AutoSend</Text>
  <Switch
    trackColor={{ false: "#ccc", true: "#039be5" }}
    thumbColor={autoSend ? "#fff" : "#fff"}
    ios_backgroundColor="#3e3e3e"
    onValueChange={toggleSwitch}
    value={autoSend} />
</SwitchContainer>

// -=-

const Component = () => {
  const [commands, setCommands] = useState([])
  const [newCommand, setNewCommand] = useState({})

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const commands = await Storage.get('commands') || []
    setCommands(commands)
  }

  const addCommand = async () => {
    const commandsBefore = await Storage.get('commands') || []
    if (!commandsBefore.some(cmd => JSON.stringify(cmd) === JSON.stringify(newCommand))) {
      await Storage.set('commands', [...commandsBefore, newCommand])
      setCommands([...commands, newCommand])
    }
  }

  const delCommand = async (command) => {
    const commandsBefore = await Storage.get('commands') || []
    const commandsAfter = commandsBefore.filter(ele => JSON.stringify(ele) != JSON.stringify(command))
    setCommands(commandsAfter)
    await Storage.set('commands', commandsAfter)
  }
  
  const toggleSwitch = (autoSend) => {
    setNewCommand({
      ...newCommand,
      autoSend
    })
  }

  return <>
    <Row><CommandList handleCommandSelected={delCommand} /></Row>
    <Form>
      <Row>
        <TextInput
          value={newCommand.text}
          handleChangeText={text => setNewCommand({ ...newCommand, text })}
          placeholder="Digite um Comand" />
        <SwitchComponent
          toggleSwitch={toggleSwitch}
          autoSend={newCommand.autoSend} />
      </Row>
      <Row>
        <Button
          handlePress={addCommand}
          labelText={'Add Command'} />
      </Row>
    </Form>
  </>
}

export default Component;