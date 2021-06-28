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
        style={{ width: 300, height: 280 }}></Image>

      <View style={styles.acess}>
        <Text style={styles.titulo}>
          FANVERSE
        </Text>

        <Button 
          title="Login" 
          onPress={() => navigate('Acesso')}
          color='gray'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#0A0430',
  },

  acess: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    color: '#DAD8D8',
    fontSize: 30,
    fontFamily: 'monospace',
    marginBottom: 30,
  },

});

export default StartScreen;