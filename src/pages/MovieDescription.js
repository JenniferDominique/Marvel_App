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

function MovieDescription({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BackButton />
        <ProfileButton />
      </View>

      <View style={styles.tela}>
        <Text style={styles.titulo}>
          Guardian of the Galaxy
        </Text>

        <Image
          style={styles.banner}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Movie%20-%20Guardians%20of%20the%20Galaxy%20(2014).jpg',
          }}
        />

        <Text>⭐⭐⭐⭐⭐</Text>

        <View style={styles.button}>
          <Button
            title="Rate"
            onPress={() => navigate('Rate')}
          />
        </View>

        <View style={styles.button}>
          <Button 
            title="Get it now"
          />
        </View>
      </View>

      <Text style={styles.subTitulo}>OVERVIEW</Text>

      <Text style={styles.texto}>
        An action-packed, epic space adventure, Marvel's "Guardians of the
        Galaxy," expands the Marvel Cinematic Universe into the cosmos, where
        brash adventurer Peter Quill finds himself the object of an unrelenting
        bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful
        villain with ambitions that threaten the entire universe. But when Quill
        discovers the true power of the orb and the menace it poses to the
        cosmos, he must do his best to rally his ragtag rivals for a last,
        desperate stand--with the galaxy's fate in the balance.
      </Text>

      <Text style={styles.subTitulo}>DIRECTED BY</Text>

      <Text style={styles.texto}>James Gunn</Text>

      <Text style={styles.subTitulo}>WRITTEN BY</Text>

      <Text style={styles.texto}>James Gunn</Text>

      <Text style={styles.subTitulo}>RATING</Text>

      <Text style={styles.texto}>PG-13</Text>

      <Text style={styles.subTitulo}>RUN TIME</Text>

      <Text style={styles.texto}>121 min</Text>

      <Text style={styles.subTitulo}>RELEASE DATE</Text>

      <Text style={styles.texto}>August 1, 2014</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0430',
    marginBottom:20,
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

  banner:{
    width: 130, 
    height: 180,
    marginTop:10,
    marginBottom:10,
  },

  titulo: {
    color: '#DAD8D8',
    fontSize: 30,
    fontFamily: 'monospace',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  subTitulo: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#DAD8D8',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontStyle: 'normal',
    marginLeft:15,
    marginTop:10,
  },

  texto: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#DAD8D8',
    fontSize: 12,
    fontFamily: 'monospace',
    fontStyle: 'normal',
    textAlign: 'justify',
    marginLeft:25,
    marginRight:15,
  },

  button:{
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 10,
  },
});

export default MovieDescription;
