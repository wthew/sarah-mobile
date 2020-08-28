import React, { useContext } from "react";

import { Touchable } from "./Containers";

import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "styled-components";

const RefreshButton = () => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext)

  return <Touchable onPress={() => navigation.reset({ routes: [{ name: 'Chat' }] })} >
    <MaterialIcons name="refresh" size={20} color={theme.highlight} />
  </Touchable>
}

export default RefreshButton
