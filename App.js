import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
          source={{
            uri: 'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/logo.png',
          }}
          style={{ width: 336, height: 303 }}
      ></Image>

      <Text
        style={{
          color: '#DAD8D8',
          fontSize: 24,
          fontFamily: 'monospace',
          fontStyle: 'normal'
        }}
      >
        FANVERSE
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0430',
    alignItems: 'center',
    justifyContent: 'center',
  },
});