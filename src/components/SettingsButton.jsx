import React from 'react';

import { Touchable } from './Containers'

import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from "@expo/vector-icons";

export default function () {
  const navigation = useNavigation();

  return <>
    <Touchable onPress={() => navigation.navigate('Settings')}>
      <MaterialIcons name="settings" size={20} color="#039be5" />
    </Touchable>
  </>
}
