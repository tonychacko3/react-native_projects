import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

export default function Register() {
  return (
    <View>
      <ImageBackground
        source={require('../images/background.jpg')}
        style={styles.background}>
        <View>
          <Image source={require('../images/logo.png')} style={styles.logo} />
        </View>
        <View>
          <TextInput style={styles.textinput} placeholder="Name" placeholderTextColor={'#99ffd6'}></TextInput>
          <TextInput style={styles.textinput} placeholder="Email" placeholderTextColor={'#99ffd6'}></TextInput>
          <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.number} placeholder='+91' keyboardType='number-pad' maxLength={0} placeholderTextColor={'#99ffd6'}></TextInput>
            <TextInput style={styles.mobile} placeholder='Mobile number' keyboardType='number-pad' maxLength={10} placeholderTextColor={'#99ffd6'}></TextInput>
          </View>
          <TextInput style={styles.textinput} placeholder='Password' placeholderTextColor={'#99ffd6'}></TextInput>
          

          <TouchableHighlight style={styles.touch}>
            <Text style={styles.text}>Log In</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 40,
    marginBottom: 50,
    marginTop: 100,
  },
  textinput: {
    backgroundColor: '#b3d1ff',
    width: 250,
    height: 40,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft:20
  },
  touch: {
    width: 250,
    height: 40,
    backgroundColor: '#00b33c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  mobile: {
    backgroundColor: '#b3d1ff',
    width: 190,
    height: 40,
    marginBottom: 20,
    borderRadius: 10,
    paddingLeft:20
  },
  number: {
    backgroundColor: '#b3d1ff',
    width: 50,
    height: 40,
    marginRight: 10,
    borderRadius: 10,
    paddingLeft:10
  },
});
