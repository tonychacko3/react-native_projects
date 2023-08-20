import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Videos from './Videos';
import Chapter from './Chapter';
import Resources from './Resources';
import QnBank from './QnBank';
import {TextInput} from 'react-native-gesture-handler';

const Top = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Top"
        component={Mytop}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Videos" component={Videos} />
      <Stack.Screen name="Chapter" component={Chapter} />
      <Stack.Screen name="Resources" component={Resources} />
      <Stack.Screen name="QNBank" component={QnBank} />
    </Stack.Navigator>
  );
}

function Mytop() {
  return (
    <View style={{flex: 1}}>
      <Topsearch />

      <Top.Navigator>
        <Top.Screen
          name="Videos"
          component={Videos}
          options={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
            tabBarIndicatorStyle:{backgroundColor:'red'}
          }}
        />
        <Top.Screen
          name="Chapter"
          component={Chapter}
          options={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
            tabBarIndicatorStyle:{backgroundColor:'red'}
          }}
        />
        <Top.Screen
          name="Resources"
          component={Resources}
          options={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
            tabBarIndicatorStyle:{backgroundColor:'red'}
          }}
        />
        <Top.Screen
          name="QNBank"
          component={QnBank}
          options={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
            tabBarIndicatorStyle:{backgroundColor:'red'}
          }}
        />
      </Top.Navigator>
    </View>
  );
}

export default function TopTabnavigation() {
  return (
    <NavigationContainer>
      <Mystack />
    </NavigationContainer>
  );
}

function Topsearch() {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'center',
          backgroundColor: 'white',
          borderColor: 'gray',
          paddingHorizontal: 10,
          borderWidth: 0.5,
          width: '100%',
          height: 37,
          marginBottom: 10,
          borderRadius: 10,
          elevation: 2,
        }}>
        <TouchableHighlight
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="search" size={20} color={'gray'} />
        </TouchableHighlight>
        <TextInput
          style={{paddingLeft: 15}}
          placeholder="Search for a service"></TextInput>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
