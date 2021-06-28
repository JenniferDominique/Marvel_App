import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function BackButton() {
  
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
      style={styles.buttonBackStyle}
      activeOpacity={0.5}
      onPress={() => {
        navigation.goBack();
      }}>
      <Image
        source={{
          uri:
            'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_back.png',
        }}
        style={styles.buttonImageIconStyle}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBackStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    height: 25,
    width: 25,
  },
});

export default BackButton;