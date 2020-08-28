import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import { Text, Switch } from 'react-native';

// Styled
const Touchable = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`

const Row = styled.View`
  flex: 1;
  height: auto;
  padding: 15px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const SwitchContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 0 0 0 15px; 
  margin: auto;
  align-items: center;
  flex-direction: row;
`

// Functionals

const SwitchComponent = ({ toggleSwitch, value, label }) => {
  const theme = useContext(ThemeContext)

  return <SwitchContainer >
    <Text style={{ color: theme.text, paddingRight: 15 }}>{label}</Text>
    <Switch
      trackColor={{ false: theme.background, true: theme.secondary }}
      thumbColor={theme.thumbColor}
      onValueChange={(value) => { toggleSwitch(value) }}
      value={value} />
  </SwitchContainer>
}

export {
  Touchable,
  Row,
  SwitchComponent
}