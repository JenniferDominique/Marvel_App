import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import BackButton from './BackButton';

function LoginScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <BackButton/>

      <Text style={styles.titulo}>LOGIN</Text>

      <TextInput
        placeholder="E-mail"
        style={{ backgroundColor: 'white', margin: 20 }}
      />

      <TextInput
        placeholder="Senha"
        style={{ backgroundColor: 'white', margin: 20 }}
      />

      <Button
        title="Entrar"
        onPress={() => navigate('Home')}
        style={{ margin: 20, justifyContent: 'center', alignItems: 'center' }}
      />
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

export default LoginScreen;