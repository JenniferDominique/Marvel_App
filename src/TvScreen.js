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

function TvScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BackButton />
        
        <ProfileButton />
      </View>

      <View style={styles.titulo}>
        <Text style={styles.titulo}>
          TV Show
        </Text>

        <Image
          style={{ width: 130, height: 180}}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/TV%20Show%20-%20The%20Falcon%20and%20The%20Winter%20Soldier%20(MAR%2019%2C2021).jpg",
          }}
        />

        <Text style={styles.subTitulo}>
          The Falcon and The Winter Soldier
        </Text>

        <Text style={styles.subSubTitulo}>
          MAR 19,2021
        </Text>

        <Image
          style={{ width: 130, height: 180}}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/TV%20Show%20-%20Marvel's%20616%20(2020).jpg",
          }}
        />

        <Text style={styles.subTitulo}>
          Marvel's 616
        </Text>

        <Text style={styles.subSubTitulo}>
          2020
        </Text>
        
        <Image
          style={{ width: 130, height: 180}}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/TV%20Show%20-%20Marvel's%20Behind%20the%20Mask%20(Fev%2012%2C%202021).jpg",
          }}
        />

        <Text style={styles.subTitulo}>
          Marvel's Behind the Mask
        </Text>

        <Text style={styles.subSubTitulo}>
          Fev 12, 2021
        </Text>

        <Image
          style={{ width: 130, height: 180}}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/TV%20Show%20-%20Marvel%20Studios%20-%20Legends%20(2021).jpg",
          }}
        />

        <Text style={styles.subTitulo}>
          Marvel Studios - Legends
        </Text>

        <Text style={styles.subSubTitulo}>
          2021
        </Text>

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

  row:{
    // https://reactnative.dev/docs/layout-props
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  titulo: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#DAD8D8',
    fontSize: 30,
    fontFamily: 'monospace',
    fontStyle: 'normal',
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

export default TvScreen;
