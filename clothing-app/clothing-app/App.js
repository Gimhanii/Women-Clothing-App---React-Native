import * as React from 'react';
import {Text, View} from 'react-native';

import Landing from './screens/Landing';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Categories from './screens/Categories';
import Skirts from './screens/Skirts';
import Top from './screens/Top';
import Denim from './screens/Denim';
import buy from './screens/buy';
import PaymentMethod from './screens/PaymentMethod';
import Success from './screens/Success';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



const Stack=createStackNavigator();


export default function App(){
  return(

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Categories" component={Categories}/>
        <Stack.Screen name="Skirts" component={Skirts}/>
        <Stack.Screen name="Top" component={Top}/>
        <Stack.Screen name="Denim" component={Denim}/>
        <Stack.Screen name="buy" component={buy}/>
        <Stack.Screen name="PaymentMethod" component={PaymentMethod}/>
        <Stack.Screen name="Success" component={Success}/>
        
      </Stack.Navigator>
    </NavigationContainer>

  );
}