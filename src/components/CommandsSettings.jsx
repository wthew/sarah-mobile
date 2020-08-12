import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Row, SwitchComponent } from "./Containers";
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
          value={newCommand.autoSend}
          label={'Auto Enviar'} />
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