import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import BackButton from './BackButton';
import ProfileButton from './ProfileButton';
import { AirbnbRating } from 'react-native-elements';

function RateScreen({ navigation: { navigate } }) {
  let state = {
    rating: 0,
  };

  let handleRating = (rating) => {
    this.setState({ rating });
  };

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

        <AirbnbRating
        count={5}
        reviews={[
          'Bad',
          'Good',
          'Hmm...',
          'Very Good',
          'Wow',
        ]}
        defaultRating={3}
        size={20}
      />
    </View>

        <Text style={styles.subTitulo}>
          Additional Description
        </Text>

        <TextInput
          multiline
          placeholder=" Comment..."
          style={styles.comment}
        />

        <View style={styles.button}>
          <Button
            title="Cancel"
            color="#8A8888"
          />
          
          <Button
            title="Save"
            color="green"
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
    textAlign: 'center',
    fontWeight: 'bold',
  },

  subTitulo: {
    color: '#DAD8D8',
    fontSize: 18,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginTop:30,
    marginLeft:15,
    textAlign: 'left',
  },

  comment:{
    backgroundColor: 'white', 
    marginLeft:20,
    marginRight:20,
    marginTop:5,
    height:50,
    width:300,
  },

  button:{
    marginLeft:20,
    marginTop:30,
    alignItems:'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },

});

export default RateScreen;
