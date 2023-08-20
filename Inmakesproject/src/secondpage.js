import React,{Component} from "react";
import { View,StyleSheet,TouchableHighlight,Text,TextInput } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialIcons";
import Firstpage from "./firstpage";

export default class Secondpage extends Component{
    componentDidMount(){
     console.log( this.props.route.params.number)

    }
  
    render(){
        return(
            <View style={{flex:1,backgroundColor:'white',justifyContent:'flex-end'}}>

                <View style={{flex:.4,backgroundColor:'white'
                ,alignItems:'center',justifyContent:'center'}}> 
                <Text style={{fontSize:25,fontWeight:'bold',
               marginRight:110,color:'#1e2121'}}>Inmakes</Text>
                <Text style={{fontSize:10,fontWeight:'bold',color:"#1e2121",marginLeft:220,marginTop:-20}}>TM</Text>
                <Text style={{fontSize:35,fontWeight:'bold',color:'#1e2121',marginTop:-10}}>Learning Hub</Text>
                </View>
               
                <View style={{flex:.56,backgroundColor:'white'}}>
                    <View style={{flex:1,backgroundColor:'white',
                    alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#1e2121',fontSize:22,fontWeight:'bold'}}>Verification code</Text>
                        <Text style={{color:'gray',fontSize:15,fontWeight:'bold'}}>Please type the Verification code send to</Text>
                        <Text style={{color:'#1e2121',fontSize:16,fontWeight:'bold',marginTop:10}}>{this.props.route.params.number}</Text>
                    </View>

                <View style={{flex:2.5,backgroundColor:'#021121',borderTopRightRadius:15,borderTopLeftRadius:15,marginTop:22}}>
                    <View style={{flex:.33,backgroundColor:'#021121',marginTop:25,flexDirection:'row' }}>
                        <TextInput style={{width:'11.5%',backgroundColor:'gray',borderRadius:4,marginLeft:30,height:40,marginTop:1}} keyboardType='number-pad' maxLength={1}></TextInput>
                        <TextInput style={{width:'11.5%',backgroundColor:'gray',borderRadius:4,marginLeft:10,height:40,marginTop:1}} keyboardType='number-pad' maxLength={1}></TextInput>
                        <TextInput style={{width:'11.5%',backgroundColor:'gray',borderRadius:4,marginLeft:10,height:40,marginTop:1}} keyboardType='number-pad' maxLength={1}></TextInput>
                        <TextInput style={{width:'11.5%',backgroundColor:'gray',borderRadius:4,marginLeft:10,height:40,marginTop:1}} keyboardType='number-pad' maxLength={1}></TextInput>
                        <TextInput style={{width:'11.5%',backgroundColor:'gray',borderRadius:4,marginLeft:10,height:40,marginTop:1}} keyboardType='number-pad' maxLength={1}></TextInput>
                        <TextInput style={{width:'11.5%',backgroundColor:'gray',borderRadius:4,marginLeft:10,height:40,marginTop:1,marginRight:30}} keyboardType='number-pad' maxLength={1}></TextInput>
                    </View>
                    <TouchableHighlight style={{width:'80%',height:60,alignItems:'center',
                    justifyContent:'center',borderRadius:5,marginTop:25, backgroundColor:'green',marginLeft:34}} 
                    onPress={()=> this.props.navigation.navigate('Thirdpage')}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Resend OTP</Text>
                    </TouchableHighlight>
                    <Text style={{marginLeft:126,color:'gray',marginTop:3}}>Resend after 28s</Text>
                </View>
                <View style={{flex:.55,backgroundColor:'#021121', flexDirection:'row',
                alignItems:'center',justifyContent:'center'}}>
                  <Icon name="call" size={18} color={'green'} style={{marginBottom:16}}/>
                  <Text style={{color:'green',fontSize:15,fontWeight:'bold',marginLeft:2,marginBottom:20}}>Contact Us</Text>
                </View>
                

                </View>
               
            </View>
        )
    }
}