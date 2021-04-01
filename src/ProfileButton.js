import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ProfileButton() {
  
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
      style={styles.buttonProfileStyle}
      activeOpacity={0.5}
      onPress={() => navigation.navigate('Profile')}
     >
      <Image
        source={{
          uri:
            'https://cdn3.iconfinder.com/data/icons/gradient-general-pack/512/user-01-512.png',
        }}
        style={styles.buttonImageIconStyle}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonProfileStyle: {
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

export default ProfileButton;