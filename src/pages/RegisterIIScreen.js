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

      <View style={styles.titleView}>
        <Text style={styles.titulo}>
          REGISTER
        </Text>
      </View>

      <TextInput
        multiline
        placeholder="   E-mail"
        style={styles.input}
      />

      <TextInput
        multiline
        placeholder="   Password"
        style={styles.input}
      />

      <TextInput
        multiline
        placeholder="   Password Confirmation"
        style={styles.input}
      />

      <View style={styles.button}>
        <Button
          title="Sing Up"
          color='gray'
          onPress={() => navigate('Home')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0430',
  },

  titleView:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20,
  },

  titulo: {
    color: '#DAD8D8',
    fontSize: 30,
    fontFamily: 'monospace',
  },

  input:{
    backgroundColor: 'white',
    borderRadius:5,
    marginBottom:20,
    marginRight:30,
    marginLeft:30,
  },

  button:{
    alignItems:'center',
    justifyContent:'center',
    margin: 20,
  },
});

export default RegisterIIScreen;