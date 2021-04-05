import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import BackButton from './BackButton';

function QuitScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <BackButton />

      <View style={styles.box}>
        <Text style={styles.txt}>
          Are you sure you want to sign out of your account?
        </Text>
        
        <View style={styles.botao}>
          <Button
            title="Cancel"
            color="#8A8888"
            onPress={() => navigate('Profile')}
          />
          <Button
            title="Quit"
            color="green"
            onPress={() => navigate('Start')}
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

  box:{
    backgroundColor:"#fff",
    margin:25,
    height:100,
  },

  txt:{
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 17,
    fontFamily: 'monospace',
    fontStyle: 'bold',
    marginRight: 10,
    marginLeft: 20
  },

  botao:{
    marginLeft:20,
    marginTop:15,
    alignItems:'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

export default QuitScreen;
