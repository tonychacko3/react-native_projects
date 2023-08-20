import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomePage from './src/screens/HomePage'
import { Provider } from 'react-redux'
import { myStore } from './src/redux/Store'
import HomeStack from './src/navigation/HomeStack'

export default function App() {
  return (
    <Provider store={myStore}>
    {/* <HomePage/> */}
    <HomeStack/>
    </Provider>
  )
}

