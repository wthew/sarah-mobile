import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from "./Button"
import TextInput from "./TextInput";

import { Row } from "./Containers";

import Storage from "../services/storage";

// Mini-Components

const Title = styled.Text`
  flex: 1;
  color: #444;
  font-size: 16px;
`

const Component = () => {
  const [hostBefore, setHostBefore] = useState('')
  const [portBefore, setPortBefore] = useState('')

  const [host, setHost] = useState('')
  const [port, setPort] = useState('')

  useEffect(() => {
    async function init() {
      const host = await Storage.get('host') || ''
      const port = await Storage.get('port') || ''

      setHostBefore(host)
      setPortBefore(port)

      setHost(host)
      setPort(port)
    }; init()
  }, [])

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
      <Title>Host Atual: {hostBefore} </Title>
      <TextInput
        value={host}
        handleChangeText={setHost}
        placeholder="Altere o host aqui"
      />
    </Row>

    <Row>
      <Title>Port Atual: {portBefore}</Title>
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