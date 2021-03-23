import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import BackButton from './BackButton';

function RegisterIIScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <BackButton />

      <Text
        style={{
          color: '#DAD8D8',
          fontSize: '30px',
          alignItems: 'left',
        }}>
        CADASTRAR
      </Text>

      <TextInput
        multiline
        placeholder="E-mail"
        style={{ backgroundColor: 'white', margin: 10 }}
      />

      <TextInput
        multiline
        placeholder="Senha"
        style={{ backgroundColor: 'white', margin: 10 }}
      />

      <TextInput
        multiline
        placeholder="Confirmar Senha"
        style={{ backgroundColor: 'white', margin: 10 }}
      />

      <Button
        title="Próximo"
        onPress={() => navigate('Home')}
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
});

export default RegisterIIScreen;