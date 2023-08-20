import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'




import HomePage from './HomePage'
import DrawerContent from './DrawerContent'

const Stack=createStackNavigator()
const Drawer=createDrawerNavigator()

function Mystack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Drawer' component={Mydrawer}/>
            <Stack.Screen name='Home' component={HomePage}/>
        </Stack.Navigator>
    )
}

function Mydrawer(){
    return(
        <Drawer.Navigator drawerContent={DrawerContent} >
            <Drawer.Screen name='Home' component={HomePage}/>

        </Drawer.Navigator>
    )
}



export default function Mynavigation() {
  return (
    <NavigationContainer>
        <Mystack/>

    </NavigationContainer>
      
    
  )
}