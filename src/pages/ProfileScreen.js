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

function ProfileScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <BackButton/>

      <View style={styles.info}>
        
        <Image
        source={{
          uri:
            'https://cdn3.iconfinder.com/data/icons/gradient-general-pack/512/user-01-512.png',
        }}
        style={styles.profileImg}
      />

        <Text style={styles.name}>
          LITTLE USER
        </Text>

        <Text style={styles.userName}>
          littleuser_12
        </Text>
      </View>
      
      <View  style={styles.buttons}>
        <Button
          title="Profile Settings"
          color='gray'
          onPress={() => navigate('Settings')}
        />
      </View>

      <View  style={styles.buttons}> 
        <Button
          title="Quit"
          color='red'
          onPress={() => navigate('Quit')}
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

  info:{
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
    marginBottom:20,
  },

  buttons:{
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
  },
});

export default ProfileScreen;
