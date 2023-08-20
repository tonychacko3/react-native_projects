import React,{Component} from "react";
import { View,StyleSheet,Text,TouchableHighlight,TextInput} from "react-native";
import  {Picker}  from "@react-native-picker/picker";
export default class Thirdpage extends Component{
    state ={user:''}

    updateUser= (user) => {
        this.setState({user:user})

    }
    
    render(){
       
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{flex:.5,backgroundColor:'white',alignItems:'center'}}>

                   
                <Text style={{fontSize:25,fontWeight:'bold',
               marginRight:110,color:'#1e2121',marginTop:75}}>Inmakes</Text>
                <Text style={{fontSize:10,fontWeight:'bold',color:"#1e2121",marginLeft:220,marginTop:-20}}>TM</Text>
                <Text style={{fontSize:35,fontWeight:'bold',color:'#1e2121',marginTop:-10}}>Learning Hub</Text>
                 
                <Text style={{fontSize:25,fontWeight:'bold',marginTop:130,color:'white'}}>Student details</Text>
                </View>
                <View style={{flex:.56,backgroundColor:'#021121',alignItems:'center' ,borderTopRightRadius:20,borderTopLeftRadius:20}}>
                    <TextInput style={{width:'85%',backgroundColor:"gray",borderRadius:5,marginTop:20,height:50,padding:15}} placeholder={'Mobile Number'} keyboardType="number-pad" maxLength={10}></TextInput>
                    <TextInput style={{width:'85%',backgroundColor:"gray",borderRadius:5,marginTop:10,height:50,padding:15}} placeholder={'Email'} keyboardType="email-address"></TextInput>

                    <Picker selectedValue={this.state.user} onValueChange={this.updateUser} 
                       style={{width:'85%',backgroundColor:"gray",borderRadius:5,marginTop:10,height:10,padding:15,color:'white',}}>
                        <Picker.Item label="Select state" value="1"/>
                        <Picker.Item label="Kerala" value="one"/>
                        <Picker.Item label="Tamilnadu" value="two"/>
                        <Picker.Item label="Gujarath" value="three"/>
                        <Picker.Item label="Delhi" value="FOUR"/>
                    </Picker>

                    <TextInput style={{width:'85%',backgroundColor:"gray",borderRadius:5,marginTop:10,height:50,padding:15 }} placeholder={'Pincode'} keyboardType='number-pad' maxLength={6}></TextInput>
                  

                  
                       
                   
                
                   
                    <TouchableHighlight style={{alignItems:'center',justifyContent:'center',
                    backgroundColor:'green',borderRadius:10,width:'75%',height:60,marginTop:15,marginBottom:15}} 
                    onPress={()=> this.props.navigation.navigate('Fourthpage')}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Register</Text>
                    </TouchableHighlight>


                </View>
               

            </View>
        )
    }
}