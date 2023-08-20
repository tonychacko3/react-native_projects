import { View, Text,TextInput,Image,StyleSheet,TouchableHighlight,ImageBackground, ScrollView } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
        
            <ImageBackground source={require('../images/background.jpg')} style={styles.background}>
                <View >
                    <Image source={require('../images/logo.png')} style={styles.logo}/>
                    

                </View>
                <View style={{}}>
                    <TextInput style={styles.textinput}placeholder='Login id'></TextInput>
                    <TextInput style={styles.textinput}placeholder='Password' secureTextEntry={true}></TextInput>
                    <TouchableHighlight style={styles.touch}>
                        <Text style={styles.text}>Submit</Text>
                    </TouchableHighlight>

                </View>
               

            </ImageBackground>
        
            
    </View>
  )
}


const styles=StyleSheet.create({
    container:{

    },


    background:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        width:200,
        height:40,
        marginBottom:50,
        marginTop:100

    },
    textinput:{
        backgroundColor:'#b3d1ff',
        width:250,
        height:40,
        borderRadius:10,
        marginBottom:20,
        paddingLeft:30
    },
    touch:{
        width:250,
        height:40,
        backgroundColor:'#00b33c',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25

    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:13
    }
})