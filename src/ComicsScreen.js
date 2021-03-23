import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import BackButton from './BackButton';

function ComicsScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <BackButton/>

      <View style={styles.titulo}>
        <Text style={styles.titulo}>Comics</Text>

        <Image
          style={{ width: 130, height: 180 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Comic%20-%20Deadpool%20Kills%20the%20Marvel%20Uviverse%20%234%20(Bunn%2C%20Andrews).jpg',
          }}
        />

        <Text style={styles.subTitulo}>
          Deadpool Kills the Marvel Uviverse #4
        </Text>

        <Text style={styles.subSubTitulo}>
          (Bunn, Andrews)
        </Text>

        <Image
          style={{ width: 130, height: 180 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Comic%20-%20Doctor%20Strange%20%231%20(Waid%2C%20Saiz).jpg',
          }}
        />

        <Text style={styles.subTitulo}>
          Doctor Strange #1
        </Text>

        <Text style={styles.subSubTitulo}>
          (Waid, Saiz)
        </Text>

        <Image
          style={{ width: 130, height: 180 }}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Comic%20-%20Captain%20Marvel%20%2326%20(Thompson%2C%20Garbett).jpg",
          }}
        />

        <Text style={styles.subTitulo}>
          Captain Marvel #26
        </Text>

        <Text style={styles.subSubTitulo}>
          (Thompson, Garbett)
        </Text>

        <Image
          style={{ width: 130, height: 180 }}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Comic%20-%20The%20Amazing%20Spider-Man%20%2360%20(Spencer%2CBagley).jpg",
          }}
        />

        <Text style={styles.subTitulo}>
          The Amazing Spider-Man #60
        </Text>

        <Text style={styles.subSubTitulo}>
          (Spencer,Bagley)
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

export default ComicsScreen;
