import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import BackButton from './BackButton';
import ProfileButton from './ProfileButton';
import ApiEvents from '../services/ApiEvents';

function NewsScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BackButton />
        
        <ProfileButton />
      </View>

      <View style={styles.titulo}>
        <Text style={styles.titulo}>
          EVENTS
        </Text>


        <View style={styles.subSubTitulo}>
          <ApiEvents/>
        </View>

        <Button
        title="More"
        style={{ margin: 20, justifyContent: 'center', alignItems: 'center' }}
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

  titulo: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#DAD8D8',
    fontSize: 30,
    fontFamily: 'monospace',
    fontStyle: 'normal',
  },

  row:{
    // https://reactnative.dev/docs/layout-props
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  subTitulo: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#DAD8D8',
    fontSize: 15,
    fontFamily: 'monospace',
    fontStyle: 'normal',
  },

  subSubTitulo: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#DAD8D8',
    fontSize: 10,
    fontFamily: 'monospace',
    fontStyle: 'normal',
  },
});

export default NewsScreen;
