import React from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';
import BackButton from './BackButton'

function AccessScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <BackButton
        style={{ height: 20, padding: 10, backgroundColor: 'white' }}
      />

      <Button
        title="Login"
        onPress={() => navigate('Login')}
        style={{ margin: 10, justifyContent: 'center' }}
      />
      <Button
        title="Cadastrar"
        onPress={() => navigate('CadastroI')}
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

export default AccessScreen;