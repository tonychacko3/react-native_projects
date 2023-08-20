import React,{Component} from "react";
import {
   View,Text,TouchableHighlight ,TextInput,StyleSheet
  } from "react-native";
 
  export default class Firstpage extends Component{
    constructor(){
        super();
        this.state={
            number:null
        }
    }
    updatenumber(number){
        this.setState({number:number})
    }
   
    render(){
        
        return(
            <View style={{flex:1,backgroundColor:'white',justifyContent:'flex-end'}}>
                 <Text style={{fontSize:20,fontWeight:'bold',color:'#1e2121',marginLeft:70}}>Inmakes</Text>
                <View style={{flex:.35 ,backgroundColor:'white',
                alignItems:'center',justifyContent:'center'}}>
                    
                
                    <View style={{flex:1,flexDirection:'row'}}>
                    <Text style={{fontSize:40,fontWeight:'bold',color:'#1e2121',marginLeft:3}}>Learnig </Text>
                    <Text style={{fontSize:40,fontWeight:'bold',color:'green'}}>Hub</Text>
                    </View>
                </View>
               
                <View style={{flex:.1,backgroundColor:'white',alignItems:'center'}}>
                    <Text style={{fontSize:22,color:'#1e2121',fontWeight:'bold'}}>Enter your Mobile number</Text>
                    <Text style={{fontSize:15,color:'#a49fa9'}}>We will send you an OTP to verify.</Text>
                </View>
               

                <View style={{flex:.28,backgroundColor:'#021121',borderTopRightRadius:15,borderTopLeftRadius:15}}>
                
                    <View style={{flex:1,flexDirection:'row'}}>
                    <TextInput style={{backgroundColor:'#3a4046',width:'20%',height:55,
                    borderWidth:2,borderRadius:7,marginLeft:20,marginTop:25,padding:20}}maxLength={0} placeholder={'+91'} keyboardType="number-pad"></TextInput>
                    <TextInput style={{backgroundColor:'#3a4046',width:'70%',height:55,
                    borderWidth:2,borderRadius:7,marginTop:25,padding:20,marginLeft:4}} placeholder={'Mobile number'} maxLength={10}
                     keyboardType="number-pad" onChangeText={(number)=>this.updatenumber(number)}></TextInput>
                    </View>

                    <TouchableHighlight style={{backgroundColor:'green',
                    width:'86%',height:50,borderRadius:5,marginBottom:40,
                    marginLeft:25,alignItems:'center',justifyContent:'center',}} underlayColor='red' 
                    onPress={()=>this.props.navigation.navigate('Secondpage',{number:this.state.number})}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Continue</Text>
                    </TouchableHighlight>

                </View>
            </View>
        )
    }
       
    
  }
  const styles=StyleSheet.create({
    container:{
        flex:1,backgroundColor:'white',
        justifyContent:'flex-end'
    },
    
  })