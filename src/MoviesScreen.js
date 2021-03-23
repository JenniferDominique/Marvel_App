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

function MoviesScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <BackButton/>

      <View style={styles.titulo}>
        <Text style={styles.titulo}
        >
          Movies
        </Text>

        <TouchableOpacity
          style={styles.buttonBackStyle}
          activeOpacity={0.5}
          onPress={() => navigate('MovieDescription')}
          >
          <Image
          style={{ width: 130, height: 180}}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Movie%20-%20Guardians%20of%20the%20Galaxy%20(2014).jpg",
          }}
        />

        <Text style={styles.subTitulo}>
          Guardian of the Galaxy
        </Text>

        <Text style={styles.subSubTitulo}>
          2014
        </Text>
        </TouchableOpacity>

        <Image
          style={{ width: 130, height: 180}}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Movie%20-%20Avangers%20Endgame%20(2019).jpg",
          }}
        />

        <Text style={styles.subTitulo}
        >
          Avangers: Endgame
        </Text>

        <Text style={styles.subSubTitulo}>
          2019
        </Text>

        <Image
          style={{ width: 130, height: 180}}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Movie%20-%20Captain%20America-%20Civil%20War%20(2016).jpg",
          }}
        />

        <Text style={styles.subTitulo}>
          Captain America: Civil War
        </Text>

        <Text style={styles.subSubTitulo}>
          2016
        </Text>

        <Image
          style={{ width: 130, height: 180}}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Movie%20-%20Captain%20Marvel%20(2019).jpg",
          }}
        />

        <Text style={styles.subTitulo}>
          Captain Marvel
        </Text>

        <Text style={styles.subSubTitulo}>
          2019
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

export default MoviesScreen;
