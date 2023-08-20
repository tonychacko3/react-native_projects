import React,{Component} from "react";
import { View,StyleSheet,TouchableHighlight,Text,Image } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialIcons";
export default class Welcomepageone extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'white',alignItems:'center'}}>
                <Image source={require('../Images/wellcomepage.jpg')} 
                style={{width:'80%',height:'70%',marginTop:50}}/>
                <Text style={{color:'black',fontWeight:'bold',fontSize:25,marginTop:15}}>Learn as you go</Text>
                <Text style={{color:'black',fontSize:10,fontWeight:'bold'}}>Download the Stockpile app and master the</Text>
                <Text style={{color:'black',fontSize:10,fontWeight:'bold'}}>market with our mini-lesson</Text>
                <TouchableHighlight style={{width:'20%',height:60,backgroundColor:'green',borderRadius:5,
                marginLeft:220,alignItems:'center',justifyContent:'center'}} 
                onPress={()=> this.props.navigation.navigate('Welcomepage2')}>
                    <Icon name="arrow-right" size={60} color='white'/>
                </TouchableHighlight>
                

            </View>
        )
    }
}