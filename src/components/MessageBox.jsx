import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function ({ sender, text }) {
  return (
    <View style={sender == 'sarah' ? styles.containerLeft: styles.containerRight}>
      <View style={styles.msgBox} >
        <Text style={styles.mainText}>{text}</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  msgBox: {
    margin: 5,
    backgroundColor: '#fff',
    minWidth: 32,
    minHeight: 32,
    maxWidth: 256,
    elevation: 2,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  containerLeft: {
    alignSelf: 'flex-start',
  },
  containerRight: {
    alignSelf: 'flex-end',
  },
  mainText: {
    color: '#777'
  },
  senderLabel: {
    color: '#999',
    fontSize: 8
  }
})