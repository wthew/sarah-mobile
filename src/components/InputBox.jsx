import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import Command from "../components/Command";

import { commands } from "../services/util";

export default function ({ onSubmit }) {
  const [message, setMessage] = useState("");
  const [command, setCommand] = useState({})

  function handleSubmit() {
    if (message.trim() != "") {
      onSubmit(message);
      setMessage("");
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.commandList}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        
        {
          commands.map((command, i) =>
            <Command
              key={i} 
              command={command} 
              handlePress={() => {
                
                if (command.script) onSubmit(command.text)

                else {
                  setMessage(command.text + " ")
                }

              }} />
          )
        }
      </ScrollView>
      <View style={styles.searchForm}>
        <TextInput
          style={styles.input}
          placeholder="Digite Para Mim Aqui..."
          placeholderTextColor="#999"
          autoCorrect={true}
          value={message}
          onChangeText={setMessage}
          autoFocus={true}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <MaterialIcons name="send" size={20} color="#039be5" />
        </TouchableOpacity>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    padding: 10,
    width: '100%',
    flexDirection: "column",
    backgroundColor: '#fff',
    elevation: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  searchForm: {
    flexDirection: "row",
  },

  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    fontSize: 16,
    marginHorizontal: 15
  },

  button: {
    width: 50,
    height: 50,
    color: '#039be5',
    borderColor: "#039be5",
    borderWidth: 2,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  commandList: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    overflow: "scroll"
  },

  commandView: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#ccc",
    height: 50,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 25,
    padding: 10
  },

  commandViewSelected: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#ccc",
    height: 50,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 25,
    padding: 10
  }
});
