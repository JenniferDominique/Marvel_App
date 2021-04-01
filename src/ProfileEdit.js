import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import BackButton from './BackButton';

function ProfileEdit({ navigation: { navigate } }) {
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

        <TextInput
          multiline
          placeholder="Little User"
          style={styles.subTitulo}
        />

        <Text style={styles.titulo}>
          User Name
        </Text>

        <TextInput
          multiline
          placeholder="littleuser_12"
          style={styles.subTitulo}
        />

        <Text style={styles.titulo}>
          E-mail
        </Text>

        <TextInput
          multiline
          placeholder="littleuser_12@example.com"
          style={styles.subTitulo}
        />

        <Text style={styles.titulo}>
          Password
        </Text>

        <TextInput
          multiline
          placeholder="********"
          style={styles.subTitulo}
        />

        <Text style={styles.titulo}>
          Confirm Password
        </Text>

        <TextInput
          multiline
          placeholder="********"
          style={styles.subTitulo}
        />

        <View style={styles.botao2}>
          <Button
            title="Cancel"
            color="#8A8888"
            onPress={() => navigate('Settings')}
          />
          <Button
            title="Save"
            color="green"
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
    justifyContent: 'space-evenly',
    flexDirection: 'row',
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
    marginRight:25,
    backgroundColor: 'white',
    height:20,
  },
});

export default ProfileEdit;