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
import ProfileButton from './ProfileButton';

function MoviesScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BackButton />
        
        <ProfileButton />
      </View>

      <View style={styles.tela}>
        <Text style={styles.titulo}>
          MOVIES
        </Text>

        <View style={styles.filme}>
          <TouchableOpacity
            style={styles.tela}
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
        </View>

        <View style={styles.filme}>
          <Image
            style={{ width: 130, height: 180}}
            source={{
              uri:
                "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Movie%20-%20Avangers%20Endgame%20(2019).jpg",
            }}
          />

          <Text style={styles.subTitulo}>
            Avangers: Endgame
          </Text>

          <Text style={styles.subSubTitulo}>
            2019
          </Text>
        </View>

        <View style={styles.filme}>
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
        </View>

        <View style={styles.filme}>
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
        </View>

        <Button
        title="More"
        style={styles.button}
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

  tela:{
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
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

  filme:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  button:{
    margin: 20, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});

export default MoviesScreen;
