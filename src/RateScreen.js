import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import BackButton from './BackButton';
import {AirbnbRating } from 'react-native-elements';

function RateScreen({ navigation: { navigate } }) {
  let state = {
    rating: 0,
  };

  let handleRating = (rating) => {
    this.setState({ rating });
  };

  return (
    <View style={styles.container}>
      <BackButton />

      <View style={styles.titulo}>
        <Text style={styles.titulo}>Guardian of the Galaxy</Text>

        <Text style={styles.subTitulo}>Content</Text>

        <AirbnbRating
        count={10}
        reviews={[
          'Terrible',
          'Bad',
          'OK',
          'Good',
          'Hmm...',
          'Very Good',
          'Wow',
          'Amazing',
          'Unbelievable',
          'Jesus',
        ]}
        defaultRating={5}
        size={15}
      />

        <Text style={styles.subTitulo}>Additional Description</Text>

        <TextInput
          multiline
          placeholder="Comment..."
          style={{ backgroundColor: 'white', margin: 20 }}
        />

        <Button
          title="Save"
          style={{ margin: 20, justifyContent: 'center', alignItems: 'center' }}
        />

        <Button
          title="Cancel"
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
    fontSize: 20,
    fontFamily: 'monospace',
    fontStyle: 'normal',
  },
});

export default RateScreen;
