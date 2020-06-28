import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const components = ({command, handlePress}) => {
  return (
    <TouchableOpacity
      onPress={() => handlePress(command)}
      style={styles.commandView}
    >
      <Text style={styles.commandText}>{command.text}</Text>
    </TouchableOpacity>
  );
}

export default components;

const styles = StyleSheet.create({
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

  commandText: {
    flexGrow: 1,
    margin: 'auto',
    color: '#039be5',
    textAlignVertical: "center"
  }
});
