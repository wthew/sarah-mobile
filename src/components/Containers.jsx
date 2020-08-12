<<<<<<< HEAD
import React from "react";
import styled from "styled-components";

import { Text, Switch } from 'react-native';

// Styled
=======
import styled from "styled-components";

>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
const Touchable = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`
<<<<<<< HEAD

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
  margin: auto;
  align-items: center;
`

// Functionals

const SwitchComponent = ({ toggleSwitch, value, label }) => <SwitchContainer >
  <Text style={{ color: "#039be5", fontWeight: "bold" }}>{label}</Text>
  <Switch
    trackColor={{ false: "#ccc", true: "#039be5" }}
    thumbColor={value ? "#fff" : "#fff"}
    ios_backgroundColor="#3e3e3e"
    onValueChange={(value) => {toggleSwitch(value)}}
    value={value} />
</SwitchContainer>

export {
  Touchable,
  Row,
  SwitchComponent
=======
const Row = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 10px;
  align-items: stretch;
`

export {
  Touchable,
  Row
>>>>>>> 2e60b4fcc829d3a63390324e0fd03b330266d4d9
}