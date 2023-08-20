
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import HomePage from '../screens/HomePage';
import MyCart from '../screens/MyCart';

const Stack = createNativeStackNavigator()

export default function HomeStack() {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Mycart" component={MyCart} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    
}