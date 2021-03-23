import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import BackButton from './BackButton';

function RegisterIScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <BackButton />

      <Text style={styles.titulo}>CADASTRAR</Text>

      <TextInput
        multiline
        placeholder="Nome de Usuário"
        style={{ backgroundColor: 'white', margin: 10 }}
      />

      <Text style={{ color: '#DAD8D8', fontSize: '10px', alignItems: 'left' }}>
        Ao se inscrever, você concorda com os Termos de Serviço da Fanverse e
        Política de Privacidade.
      </Text>

      <Button
        title="Inscreva-se"
        onPress={() => navigate('CadastroII')}
        style={{ margin: 10, justifyContent: 'center' }}
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

export default RegisterIScreen;