import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './src/pages/StartScreen';
import AccessScreen from './src/pages/AccessScreen';
import LoginScreen from './src/pages/LoginScreen';
import RegisterIScreen from './src/pages/RegisterIScreen';
import RegisterIIScreen from './src/pages/RegisterIIScreen';
import HomeScreen from './src/pages/HomeScreen';
import StorieScreen from './src/pages/StorieScreen';
import MovieDescription from './src/pages/MovieDescription';
import SeriesScreen from './src/pages/SeriesScreen';
import ComicsScreen from './src/pages/ComicsScreen';
import EventsScreen from './src/pages/EventsScreen';
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

        <Stack.Screen name="Stories" component={StorieScreen} />
        <Stack.Screen name="Series" component={SeriesScreen} />
        <Stack.Screen name="Comics" component={ComicsScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="MovieDescription" component={MovieDescription}/>
        <Stack.Screen name="Characters" component={CharacterScreen} />
        <Stack.Screen name="Rate" component={RateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
