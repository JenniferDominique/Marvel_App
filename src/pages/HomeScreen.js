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
import ProfileButton from './ProfileButton';


function HomeScreen({ navigation: { navigate } }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ProfileButton />
      </View>

      <View style={styles.titleView}>
        <Text style={styles.titulo}>
          EXPLORE
        </Text>
      </View>

      <View style={styles.carroselView1}>
        <CarouselPager
          key="menu"
          initialPage={1}
          pageSpacing={-160}
          pageStyle={styles.carrosel}
        >
          <TouchableOpacity id='charactersButton'
            style={styles.buttonBackStyle}
            activeOpacity={0.5}
            onPress={() => navigate('Characters')}
          >
            <Image
              key="characters"
              style={styles.imgButton}
              source={{
                uri:
                  'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_games.png',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity id='storiesButton'
            style={styles.buttonBackStyle}
            activeOpacity={0.5}
            onPress={() => navigate('Stories')}
          >
            <Image
              key="stories"
              style={styles.imgButton}
              source={{
                uri:
                  'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_movies.png',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity id='seriesButton'
            style={styles.buttonBackStyle}
            activeOpacity={0.5}
            onPress={() => navigate('Series')}
          >
            <Image
              key="series"
              style={styles.imgButton}
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
              style={styles.imgButton}
              source={{
                uri:
                  'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_comics.png',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity id='eventsButton'
            style={styles.buttonBackStyle}
            activeOpacity={0.5}
            onPress={() => navigate('Events')}
          >
            <Image
              key="events"
              style={styles.imgButton}
              source={{
                uri:
                  'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_news.png',
              }}
            />
          </TouchableOpacity>
        </CarouselPager>
      </View>


      <TextInput
        multiline
        placeholder="   Search..."
        style={styles.input}
      />

      <View>
        <TouchableOpacity id='charactersButton'
          style={styles.buttonBackStyle}
          activeOpacity={0.5}
          onPress={() => navigate('Characters')}
        >
          <Text style={styles.subtitulo}>
            #Characters Screen#
          </Text>
  
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitulo}>What's New?</Text>

      <View style={styles.carroselView}>
        <CarouselPager
          key="WhatNews"
          initialPage={1}
          pageSpacing={-150}
          pageStyle={styles.carrosel}
        >
          <Image
            style={styles.img}
            source={{
              uri:
                "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/TV%20Show%20-%20Marvel's%20616%20(2020).jpg",
            }}
          />

          <Image
            style={styles.img}
            source={{
              uri:
                "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Games%20-%20Marvel's%20Spider-Man.%20Miles%20Morales%20(2020).jpg",
            }}
          />
        </CarouselPager>
      </View>


      <Text style={styles.subtitulo}>Recently Seen</Text>

      <View style={styles.carroselView}>
        <CarouselPager
          key="RecentlySeen"
          initialPage={1}
          pageSpacing={-150}
          pageStyle={styles.carrosel}
        >
          <Image
            style={styles.img}
            source={{
              uri:
                'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Game%20-%20Fortnite%20(2020).jpg',
            }}
          />

          <Image
            style={styles.img}
            source={{
              uri:
                'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Movie%20-%20Guardians%20of%20the%20Galaxy%20(2014).jpg',
            }}
          />

          <Image
            style={styles.img}
            source={{
              uri:
                'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/TV%20Show%20-%20Marvel%20Studios%20-%20Legends%20(2021).jpg',
            }}
          />
        </CarouselPager>
      </View>

      <Text style={styles.subtitulo}>Most Viewed</Text>

      <View style={styles.carroselView}>
        <CarouselPager
          key="MostViewed"
          initialPage={1}
          pageSpacing={-150}
          pageStyle={styles.carrosel}
        >
          <Image
            style={styles.img}
            source={{
              uri:
                "https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Games%20-%20Marvel's%20Spider-Man.%20Miles%20Morales%20(2020).jpg",
            }}
          />

          <Image
            style={styles.img}
            source={{
              uri:
                'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Movie%20-%20Captain%20America-%20Civil%20War%20(2016).jpg',
            }}
          />

          <Image
            style={styles.img}
            source={{
              uri:
                'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/posters/Movie%20-%20Guardians%20of%20the%20Galaxy%20(2014).jpg',
            }}
          />
        </CarouselPager>
      </View>

      <Text style={styles.subtitulo}>Spacial Content</Text>

      <View style={styles.carroselView2}>
        <CarouselPager
          key="SpecialContent"
          initialPage={1}
          pageSpacing={-110}
          pageStyle={styles.carrosel}
        >
          <Image
            style={styles.imgSpecial}
            source={{
              uri:
                'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_characters.png',
            }}
          />

          <Image
            style={styles.imgSpecial}
            source={{
              uri:
                'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_publicFav.png',
            }}
          />

          <Image
            style={styles.imgSpecial}
            source={{
              uri:
                'https://raw.githubusercontent.com/JenniferDominique/Marvel_App/master/img/button_comicsEvent.png',
            }}
          />
        </CarouselPager>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0430',
  },

  row: {
    // https://reactnative.dev/docs/layout-props
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  titleView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  titulo: {
    color: '#DAD8D8',
    fontSize: 30,
    fontFamily: 'monospace',
  },

  input: {
    backgroundColor: 'white',
    fontSize: 15,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 30,
    marginLeft: 30,
  },

  carrosel: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  carroselView: {
    height: 150,
  },

  carroselView1: {
    height: 100,
  },

  carroselView2: {
    height: 180,
  },

  subtitulo: {
    color: '#DAD8D8',
    fontSize: 25,
    fontFamily: 'monospace',
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 15,
  },

  imgButton: {
    width: 100,
    height: 100,
  },

  img: {
    width: 100,
    height: 150,
  },

  imgSpecial: {
    width: 130,
    height: 180,
  },

});

export default HomeScreen;
