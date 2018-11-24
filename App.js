import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './screens/Home';
import Perguntas from './screens/Perguntas';
import Resultado from './screens/Resultado';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    TelaPerguntas: Perguntas,
    TelaResultado: Resultado
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Engenharia Vocacional',
      headerStyle: {
        backgroundColor: '#483D8B',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (<AppContainer />);
  }
}