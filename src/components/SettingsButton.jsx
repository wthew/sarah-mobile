import React, { useContext } from 'react';

import { Touchable } from './Containers'

import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from 'styled-components';

export default function () {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext)

  return <Touchable onPress={() => navigation.navigate('Settings')}>
    <MaterialIcons name="settings" size={20} color={theme.highlight} />
  </Touchable>
}
