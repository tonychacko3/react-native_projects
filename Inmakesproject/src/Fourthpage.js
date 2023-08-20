import React,{Component} from "react";
import { View,StyleSheet,Text,TouchableHighlight } from "react-native";
import { Picker } from "@react-native-picker/picker";  
export default class Forthpage extends Component{
   constructor(){
    super();
    this.state={
        user:'',
        Sclass:''
    }
   }
    updatestate=(user)=>{
        this.setState({user:user})

    }
    updateselectClass=(a)=>{
        this.setState({Sclass:a})
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{flex:.64,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:25,fontWeight:'bold',
                      marginRight:110,color:'#1e2121',marginTop:100}}>Inmakes</Text>
                <Text style={{fontSize:10,fontWeight:'bold',color:"#1e2121",marginLeft:220,marginTop:-20}}>TM</Text>
                <Text style={{fontSize:35,fontWeight:'bold',color:'#1e2121',marginTop:-10,marginBottom:0}}>Learning Hub</Text>
                <Text style={{fontSize:23,fontWeight:'bold',color:'#021121',marginTop:200}}>Select you school board</Text>
                </View>

                <View style={{flex:.36,backgroundColor:'#021121'}}>
                    <Picker selectedValue={this.state.user} onValueChange={this.updatestate}
                    style={{width:'90%',backgroundColor:"gray",borderRadius:0,marginTop:30,height:10,padding:15,color:'white',marginLeft:20}}>
                        <Picker.Item label="Select Board" value="one"/>
                        <Picker.Item label="C B S E" value="two"/>
                        <Picker.Item label="I C S E" value="three"/>
                        <Picker.Item label="STATE" value="four"/>

                    </Picker>

                    <Picker selectedValue={this.state.Sclass} onValueChange={this.updateselectClass}
                    style={{width:'90%',backgroundColor:"gray",borderRadius:0,marginTop:10,height:10,padding:15,color:'white',marginLeft:20}}>
                        <Picker.Item label="Select Class" value="one"/>
                        <Picker.Item label="ONE" value="two"/>
                        <Picker.Item label="Two" value="three"/>
                        <Picker.Item label="Three" value="four"/>
                    </Picker>
                    <TouchableHighlight style={{alignItems:'center',justifyContent:'center',
                    backgroundColor:'green',borderRadius:10,width:'85%',height:60,marginTop:20,marginLeft:28}}
                    onPress={()=> this.props.navigation.navigate('Welcomepage1')}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Continue</Text>
                    </TouchableHighlight>

                </View>
            </View>
        )
    }
}