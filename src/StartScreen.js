import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';

function StartScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/logo.png',
        }}
        style={{ width: 336, height: 303 }}></Image>

      <Text style={styles.titulo}>FANVERSE</Text>

      <Button title="Acessar" onPress={() => navigate('Acesso')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0430',
  },

  titulo: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#DAD8D8',
    fontSize: 24,
    fontFamily: 'monospace',
    fontStyle: 'normal',
  },

});

export default StartScreen;