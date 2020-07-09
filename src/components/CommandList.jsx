import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import Button from './Button'

import Storage from "../services/storage";

// Mini-Component

const ScrollContainer = styled.ScrollView`
  flex-direction: row;
`

const CommandContainer = styled.View`
  margin: 0 5px;
`

const Component = ({ handleCommandSelected }) => {
  const [commands, setCommands] = useState([])

  useEffect(() => {
    async function init() {
      await loadCommands()
      Storage.on('set', handleStorageChanges)
    } init()

    return () => Storage.off('set', handleStorageChanges)
  }, [])

  const handleStorageChanges = async () => {
    await loadCommands()
  }

  const loadCommands = async () => {
    const commands = await Storage.get('commands') || []
    setCommands(commands)
  }

  return <ScrollContainer
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    keyboardShouldPersistTaps="always">
    {
      commands.length > 0 ?
        commands.map((command, key) => <CommandContainer key={key}>
          <Button
            handlePress={() => handleCommandSelected(command)}
            labelText={command.text} />
        </CommandContainer>
        ) : <Button labelText={'Sem Mensagens Rápidas por enquanto'} />
    }
  </ScrollContainer>;
}

export default Component;

