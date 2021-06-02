import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CarouselPager from 'react-native-carousel-pager';
import StartScreen from './src/pages/StartScreen';
import AccessScreen from './src/pages/AccessScreen';
import LoginScreen from './src/pages/LoginScreen';
import RegisterIScreen from './src/pages/RegisterIScreen';
import RegisterIIScreen from './src/pages/RegisterIIScreen';
import HomeScreen from './src/pages/HomeScreen';
import GamesScreen from './src/pages/GamesScreen';
import MoviesScreen from './src/pages/MoviesScreen';
import MovieDescription from './src/pages/MovieDescription';
import TvScreen from './src/pages/TvScreen';
import ComicsScreen from './src/pages/ComicsScreen';
import NewsScreen from './src/pages/NewsScreen';
import RateScreen from './src/pages/RateScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import ProfileSettings from './src/pages/ProfileSettings';
import ProfileEdit from './src/pages/ProfileEdit';
import QuitScreen from './src/pages/QuitScreen';
import Camera from './src/pages/Camera';
import CharacterScreen from './src/pages/CharacterScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Acesso" component={AccessScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CadastroI" component={RegisterIScreen} />
        <Stack.Screen name="CadastroII" component={RegisterIIScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={ProfileSettings} />
        <Stack.Screen name="Edit" component={ProfileEdit} />
        <Stack.Screen name="Quit" component={QuitScreen} />
        <Stack.Screen name="Camera" component={Camera} />

        <Stack.Screen name="Games" component={GamesScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
        <Stack.Screen name="Tv" component={TvScreen} />
        <Stack.Screen name="Comics" component={ComicsScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="MovieDescription" component={MovieDescription}/>
        <Stack.Screen name="Characters" component={CharacterScreen} />
        <Stack.Screen name="Rate" component={RateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
