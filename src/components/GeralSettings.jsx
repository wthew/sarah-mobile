import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from "./Button"
import TextInput from "./TextInput";

import { Row, SwitchComponent } from "./Containers";

import Storage from "../services/storage";

// Mini-Components

const Title = styled.Text`
  flex: 1;
  color: ${props => props.theme.text};
  font-size: 16px;
`

const Component = () => {
  const [hostBefore, setHostBefore] = useState('')
  const [portBefore, setPortBefore] = useState('')

  const [host, setHost] = useState('')
  const [port, setPort] = useState('')
  const [dark, setDark] = useState(false)

  useEffect(() => {
    async function init() {
      const host = await Storage.get('host')
      const port = await Storage.get('port')
      const theme = await Storage.get('theme')

      setHostBefore(host)
      setPortBefore(port)

      setHost(host)
      setPort(port)
      setDark(theme == 'dark' ? true : false)
    }; init()

    Storage.onChangeKey('theme', handleThemeChanges)

    return () => {
      Storage.releaseListener('theme', handleThemeChanges)
    }
  }, [])

  const handleThemeChanges = async () => {
    const newTheme = await Storage.get('theme')
    setDark(newTheme == 'dark' ? true : false)
  }

  const handleSubmit = async () => {
    if (host != '') {
      await Storage.set('host', host)
      setHostBefore(host)
    }

    if (port != '') {
      await Storage.set('port', port)
      setPortBefore(port)
    }
  }

  return <>

    <Row>
      <Title>Modo Noturno</Title>
      <SwitchComponent
        toggleSwitch={async (value) => {
          await Storage.set('theme', dark ? 'light' : 'dark')
        }}
        value={dark} />
    </Row>

    <Row>
      <Title>Host: {hostBefore}</Title>
      <TextInput
        value={host}
        handleChangeText={setHost}
        placeholder="Altere o host aqui"
      />
    </Row>

    <Row>
      <Title>Port: {portBefore}</Title>
      <TextInput
        value={port}
        handleChangeText={setPort}
        placeholder="Altere a porta aqui" />
    </Row>

    <Row>
      <Button
        handlePress={handleSubmit}
        labelText={'Salvar Novo Host e Nova Porta'} />
    </Row>

  </>;
}

export default Component;