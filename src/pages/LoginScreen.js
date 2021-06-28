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

      <View style={styles.titleView}>
        <Text style={styles.titulo}>
          LOGIN
        </Text>
      </View>

      <TextInput
        placeholder="   E-mail"
        style={styles.input}
      />

      <TextInput
        placeholder="   Password"
        style={styles.input}
      />

      <View style={styles.button}>
        <Button
          title="Enter"
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
  },

  titulo: {
    color: '#DAD8D8',
    fontSize: 30,
    fontFamily: 'monospace',
    fontStyle: 'normal',
  },

  input:{
    backgroundColor: 'white',
    borderRadius:5,
    marginTop:20,
    marginRight:30,
    marginLeft:30,
  },
  
  button:{
    alignItems:'center',
    justifyContent:'center',
    margin: 20,
  },
});

export default LoginScreen;