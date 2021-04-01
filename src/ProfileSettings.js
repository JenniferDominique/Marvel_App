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

function ProfileSettings({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <BackButton/>

      <View style={styles.profile}>
        
        <Image
        source={{
          uri:
            'https://cdn3.iconfinder.com/data/icons/gradient-general-pack/512/user-01-512.png',
        }}
        style={styles.profileImg}
      />
      
      <View>
        <Text style={styles.name}>
          LITTLE USER
        </Text>

        <Text style={styles.userName}>
          littleuser_12
        </Text>
      </View>
      </View>
      
      <View style = {styles.infos}>
        <View style={styles.botao}>
          <Button
            title="Edit Photo"
            color="#8A8888"
          />
        </View>

        <Text style={styles.titulo}>
          Name
        </Text>

        <Text style={styles.subTitulo}>
          Little User
        </Text>

        <Text style={styles.titulo}>
          User Name
        </Text>

        <Text style={styles.subTitulo}>
          littleuser_12
        </Text>

        <Text style={styles.titulo}>
          E-mail
        </Text>

        <Text style={styles.subTitulo}>
          littleuser_12@example.com
        </Text>

        <Text style={styles.titulo}>
          Password
        </Text>

        <Text style={styles.subTitulo}>
          ********
        </Text>

        <View style={styles.botao2}>
          <Button
            title="Edit"
            color="#8A8888"
            onPress={() => navigate('Edit')}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  // https://reactnative.dev/docs/layout-props

  container: {
    flex: 1,
    backgroundColor: '#0A0430',
  },

  profile:{
    alignItems: 'left',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginBottom: 10,
    marginLeft:15,    
    flexDirection: 'row',
  },
  
  profileImg: {
    height: 70,
    width: 70,
  },

  name: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#DAD8D8',
    fontSize: 30,
    fontFamily: 'monospace',
    fontStyle: 'normal',
    marginLeft:10,
    marginTop: 5,
  },

  userName: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#DAD8D8',
    fontSize: 15,
    fontFamily: 'monospace',
    fontStyle: 'normal',
    marginLeft:15,
  },

  botao:{
    width:100,
    marginLeft:20,
  },

  botao2:{
    marginLeft:20,
    marginTop:15,
    alignItems:'center',
  },

  infos: {
    alignItems: 'left',
    justifyContent: 'left',
    color: '#DAD8D8',
    fontSize: 15,
    fontFamily: 'monospace',
    fontStyle: 'normal',
    marginTop: 10,
    marginBottom:10,
  },

  titulo: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#DAD8D8',
    fontSize: 18,
    fontFamily: 'monospace',
    fontStyle: 'normal',
    marginLeft:15,
    marginTop:10,
  },

  subTitulo: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#908F90',
    fontSize: 16,
    fontFamily: 'monospace',
    fontStyle: 'normal',
    marginLeft:25,
  },
});

export default ProfileSettings;