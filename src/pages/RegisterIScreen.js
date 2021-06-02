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

      <View style={styles.titleView}>
        <Text style={styles.titulo}>
          REGISTER
        </Text>
      </View>

      <TextInput
        multiline
        placeholder="   User Name"
        style={styles.input}
      />

      <Text style={styles.txt}>
        Ao se inscrever, você concorda com os Termos de 
        Serviço da Fanverse e Política de Privacidade.
      </Text>

      <View style={styles.button}>
        <Button
          title="Next"
          onPress={() => navigate('CadastroII')}
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
  },

  input:{
    backgroundColor: 'white',
    borderRadius:5,
    marginTop:20,
    marginBottom:20,
    marginRight:30,
    marginLeft:30,
  },

  txt:{
    color: '#DAD8D8', 
    fontSize: '10px', 
    alignItems: 'left',
    marginLeft:20,
    marginRight:20,
  },

  button:{
    alignItems:'center',
    justifyContent:'center',
    margin: 20,
  },
});

export default RegisterIScreen;