import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CarouselPager from 'react-native-carousel-pager';
import StartScreen from './src/StartScreen';
import AccessScreen from './src/AccessScreen';
import LoginScreen from './src/LoginScreen';
import RegisterIScreen from './src/RegisterIScreen';
import RegisterIIScreen from './src/RegisterIIScreen';
import HomeScreen from './src/HomeScreen';
import GamesScreen from './src/GamesScreen';
import MoviesScreen from './src/MoviesScreen';
import MovieDescription from './src/MovieDescription';
import TvScreen from './src/TvScreen';
import ComicsScreen from './src/ComicsScreen';
import NewsScreen from './src/NewsScreen';
import RateScreen from './src/RateScreen';

// ------------------------APP----------------------------------

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Acesso" component={AccessScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CadastroI" component={RegisterIScreen} />
        <Stack.Screen name="CadastroII" component={RegisterIIScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        
        <Stack.Screen name="Games" component={GamesScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
        <Stack.Screen name="Tv" component={TvScreen} />
        <Stack.Screen name="Comics" component={ComicsScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        
        <Stack.Screen name="MovieDescription" component={MovieDescription} />

        <Stack.Screen name="Rate" component={RateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
