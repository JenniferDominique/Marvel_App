import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CarouselPager from 'react-native-carousel-pager';
import BackButton from './BackButton';
import ProfileButton from './ProfileButton';


function HomeScreen({ navigation: { navigate } }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BackButton />
        <ProfileButton />
      </View>

      <Text style={styles.titulo}>Explore</Text>

      <CarouselPager
        key="menu"
        initialPage={0}
        pageSpacing={-150}>

        <TouchableOpacity id='moviesButton'
          style={styles.buttonBackStyle}
          activeOpacity={0.5}
          onPress={() => navigate('Movies')}
          >
          <Image
          key="movies"
          style={{ width: 100, height: 100 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_movies.png',
          }}
        />
        </TouchableOpacity>

        <TouchableOpacity id='gamesButton'
          style={styles.buttonBackStyle}
          activeOpacity={0.5}
          onPress={() => navigate('Games')}
          >
          <Image
          key="games"
          style={{ width: 100, height: 100 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_games.png',
          }}
        />
        </TouchableOpacity>

        <TouchableOpacity id='tvButton'
          style={styles.buttonBackStyle}
          activeOpacity={0.5}
          onPress={() => navigate('Tv')}
          >
          <Image
          key="tv"
          style={{ width: 100, height: 100 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_tv.png',
          }}
        />
        </TouchableOpacity>
        
        <TouchableOpacity id='comicsButton'
          style={styles.buttonBackStyle}
          activeOpacity={0.5}
          onPress={() => navigate('Comics')}
          >
          <Image
          key="comics"
          style={{ width: 100, height: 100 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_comics.png',
          }}
        />
        </TouchableOpacity>
        
        <TouchableOpacity id='newsButton'
          style={styles.buttonBackStyle}
          activeOpacity={0.5}
          onPress={() => navigate('News')}
          >
          <Image
          key="news"
          style={{ width: 100, height: 100 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_news.png',
          }}
        />
        </TouchableOpacity>
        
      </CarouselPager>

      <TextInput
        multiline
        placeholder="Search..."
        style={{ backgroundColor: 'white', margin: 10 }}
      />

      <Text style={styles.titulo}>What's New?</Text>

      <CarouselPager
        key="WhatNews"
        initialPage={0}
        pageSpacing={-150}
        //pageStyle={{backgroundColor: '#fff'}}
      >
        <Image
          style={{ width: 100, height: 150 }}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/TV%20Show%20-%20Marvel's%20616%20(2020).jpg",
          }}
        />

        <Image
          style={{ width: 100, height: 150 }}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Games%20-%20Marvel's%20Spider-Man.%20Miles%20Morales%20(2020).jpg",
          }}
        />
      </CarouselPager>

      <Text style={styles.titulo}>Recently Seen</Text>

      <CarouselPager
        key="RecentlySeen"
        initialPage={0}
        pageSpacing={-150}
        //pageStyle={{backgroundColor: '#fff'}}
      >
        <Image
          style={{ width: 100, height: 150 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Game%20-%20Fortnite%20(2020).jpg',
          }}
        />

        <Image
          style={{ width: 100, height: 150 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Movie%20-%20Guardians%20of%20the%20Galaxy%20(2014).jpg',
          }}
        />

        <Image
          style={{ width: 100, height: 150 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/TV%20Show%20-%20Marvel%20Studios%20-%20Legends%20(2021).jpg',
          }}
        />
      </CarouselPager>

      <Text style={styles.titulo}>Most Viewed</Text>

      <CarouselPager
        key="MostViewed"
        initialPage={0}
        pageSpacing={-150}>
        <Image
          style={{ width: 100, height: 150 }}
          source={{
            uri:
              "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Games%20-%20Marvel's%20Spider-Man.%20Miles%20Morales%20(2020).jpg",
          }}
        />

        <Image
          style={{ width: 100, height: 150 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Movie%20-%20Captain%20America-%20Civil%20War%20(2016).jpg',
          }}
        />

        <Image
          style={{ width: 100, height: 150 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Movie%20-%20Guardians%20of%20the%20Galaxy%20(2014).jpg',
          }}
        />
      </CarouselPager>

      <Text style={styles.titulo}>Spacial Content</Text>

      <CarouselPager
        key="SpecialContent"
        initialPage={0}
        pageSpacing={-100}>
        <Image
          style={{ width: 130, height: 180 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_characters.png',
          }}
        />

        <Image
          style={{ width: 130, height: 180 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_publicFav.png',
          }}
        />

        <Image
          style={{ width: 130, height: 180 }}
          source={{
            uri:
              'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_comicsEvent.png',
          }}
        />
      </CarouselPager>
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
    fontSize: 24,
    fontFamily: 'monospace',
    fontStyle: 'normal',
  },

  row:{
    // https://reactnative.dev/docs/layout-props
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default HomeScreen;
