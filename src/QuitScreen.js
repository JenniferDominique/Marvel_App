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

      <View style={styles.info}>
        <Image
          source={{
            uri:
              'https://cdn3.iconfinder.com/data/icons/gradient-general-pack/512/user-01-512.png',
          }}
          style={styles.profileImg}
        />

        <Text style={styles.name}>LITTLE USER</Text>

        <Text style={styles.userName}>littleuser_12</Text>
      </View>

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

  info: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  profileImg: {
    height: 80,
    width: 80,
  },

  name: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#DAD8D8',
    fontSize: 30,
    fontFamily: 'monospace',
    fontStyle: 'normal',
  },

  userName: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#DAD8D8',
    fontSize: 15,
    fontFamily: 'monospace',
    fontStyle: 'normal',
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
