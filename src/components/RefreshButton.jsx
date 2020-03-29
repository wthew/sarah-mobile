import * as React from "react";
import { TouchableOpacity } from "react-native";

import { useNavigation } from '@react-navigation/native';

import { NavigationContainer, CommonActions } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";

export default function() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              { name: "Chat", }
            ]
          })
        )
      }
      style={{
        width: 50,
        height: 50,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <MaterialIcons name="refresh" size={20} color="#039be5" />
    </TouchableOpacity>
  );
}
