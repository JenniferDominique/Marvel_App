import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

function Home() {
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

      <Button
        title="Acessar"
        color="#0A0430"
        //onPress={() => Alert.alert('Button with adjusted color pressed')}
        // https://reactnavigation.org/docs/use-navigation
        style={{
          position: 'absolute',
          width: 132,
          height: 27,
          left: 114,
          top: 580,
        }}
      />
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

export default Home();