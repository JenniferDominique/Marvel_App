import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import BackButton from './BackButton';

function MovieDescription({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <BackButton />

      <View style={styles.titulo}>
        <Text style={styles.titulo}>Guardian of the Galaxy</Text>

        <Image
          style={{ width: 130, height: 180 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Movie%20-%20Guardians%20of%20the%20Galaxy%20(2014).jpg',
          }}
        />

        <Text>⭐⭐⭐⭐⭐</Text>

        <Button
          title="Rate"
          style={{ margin: 20, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => navigate('Rate')}
        />

        <Button
          title="Get it now"
          style={{ margin: 20, justifyContent: 'center', alignItems: 'center' }}
        />
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
    fontSize: 20,
    fontFamily: 'monospace',
    fontStyle: 'normal',
  },

  texto: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#DAD8D8',
    fontSize: 10,
    fontFamily: 'monospace',
    fontStyle: 'normal',
  },
});

export default MovieDescription;
