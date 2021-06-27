import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homescreen';
import ISSLocationScreen from './screens/ISSLocation';
import MeteorScreen from './screens/Meteor';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack=createStackNavigator()
export default class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='homescreen' screenOptions={{headerShown:false}}>
          <Stack.Screen name='homescreen' component={HomeScreen}/>
          <Stack.Screen name='ISSLocation' component={ISSLocationScreen}/>
          <Stack.Screen name='Meteor' component={MeteorScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
