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

function NewsScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BackButton />
        
        <ProfileButton />
      </View>

      <View style={styles.titulo}>
        <Text style={styles.titulo}
        >
          News
        </Text>

        <Image
          style={{ width: 130, height: 180}}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Game%20-%20Fortnite%20(2020).jpg",
          }}
        />

        <Text style={styles.subTitulo}
        >
          Fortnite
        </Text>

        <Text style={styles.subSubTitulo}
        >
          2016
        </Text>

        <Image
          style={{ width: 130, height: 180}}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Game%20-%20Marvel%20Contest%20of%20Champions.jpg",
          }}
        />

        <Text style={styles.subTitulo}
        >
          Marvel Contest of Champions
        </Text>

        <Text style={styles.subSubTitulo}
        >
        </Text>

        <Image
          style={{ width: 130, height: 180}}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Game%20-%20Marvel's%20Avangers%20(2020).jpg",
          }}
        />

        <Text style={styles.subTitulo}
        >
          Marvel's Avangers
        </Text>

        <Text style={styles.subSubTitulo}
        >
        2020
        </Text>

        <Image
          style={{ width: 130, height: 180}}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Games%20-%20Marvel's%20Spider-Man.%20Miles%20Morales%20(2020).jpg",
          }}
        />

        <Text style={styles.subTitulo}
        >
          Marvel's Spider-Man: Miles Morales
        </Text>

        <Text style={styles.subSubTitulo}
        >
        2020
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
