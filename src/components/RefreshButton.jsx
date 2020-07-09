import React from "react";

import { Touchable } from "./Containers";

import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from "@expo/vector-icons";

const RefreshButton = () => {
  const navigation = useNavigation();

  return <>
    <Touchable onPress={() => navigation.reset({ routes: [{ name: 'Chat' }] })} >
      <MaterialIcons name="refresh" size={20} color="#039be5" />
    </Touchable>
  </>
}

export default RefreshButton
