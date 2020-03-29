import React, { useEffect, useState } from "react";
import { View } from "react-native";

import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default function({ onSubmit }) {
  const [message, setMessage] = useState("");

  function handleSubmit() {
    if (message.trim() != "") {
      onSubmit(message);
      setMessage("");
    }
  }

  return (
    <View style={styles.searchForm}>
      <TextInput
        style={styles.input}
        placeholder="Digite Para Mim Aqui..."
        placeholderTextColor="#999"
        autoCorrect={true}
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <MaterialIcons name="send" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchForm: {
    position: "absolute",
    bottom: 15,
    left: 20,
    right: 20,
    flexDirection: "row",
  },

  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    elevation: 4,
    marginRight: 15,
    marginLeft: 15
  },

  button: {
    width: 50,
    height: 50,
    backgroundColor: "#039be5",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4
  },
});
