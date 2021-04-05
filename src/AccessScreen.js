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
      <BackButton/>

      <View style={styles.but}>
        <View style={styles.buttons}>
          <Button
            title="Login"
            color='gray'
            onPress={() => navigate('Login')}
          />
        </View>

        <View  style={styles.buttons}>
          <Button
            title="Register"
            color='gray'
            onPress={() => navigate('CadastroI')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0430',
  },

  buttons:{
    alignItems:'center',
    justifyContent:'center',
    marginBottom:25,
  },

  but:{
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
  }
});

export default AccessScreen;