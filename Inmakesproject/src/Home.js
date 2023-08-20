import React,{Component} from "react";
import { View,Text,Image,StyleSheet ,TouchableHighlight,ScrollView, ImageBackground} from "react-native";
import { Picker } from "@react-native-picker/picker";
import  Icon  from "react-native-vector-icons/MaterialIcons";

export default class Home extends Component{
    
        state={ user:null}
        

  updateuser = (tony) =>{
        
        this.setState({user:tony})
        
    }
    render(){
        return(
            <ScrollView style={{backgroundColor:'white',marginBottom:2}}>
                {/* name ezhuthan ullethu*/}
                <View style={{backgroundColor:'white',marginTop:10,marginBottom:25}}>
                    <Text style={{color:'black',fontSize:15,marginLeft:30,marginTop:5}}>Good morning</Text>
                    <Text style={{color:'black',fontSize:25,marginLeft:20,fontWeight:'700',marginTop:4}}> Aaron Taylor</Text>
                </View>
                {/* PICKE USE CHEYYAN  */}
                <View style={{backgroundColor:'#010b1e',marginBottom:30,borderRadius:10,width:'90%',marginLeft:17,}}>
                    <Text style={{fontSize:15,marginLeft:25,marginBottom:-15,color:'white',marginTop:15}}>Class</Text>
                    <Picker selectedValue={this.state.user} onValueChange={this.updateuser}
                          style={{width:'100%',backgroundColor:"white'",borderRadius:5,marginBottom:5,marginLeft:10}}>
                            <Picker.Item label="Plus Two Science" value={1} style={{ fontSize:20,fontWeight:'bold',color:'gray',marginLeft:10}}/>
                            <Picker.Item label=" ONE" value={2} style={{ fontSize:20,fontWeight:'bold',color:'gray',marginLeft:10,}}/>
                            <Picker.Item label=" TWO" value={3} style={{ fontSize:20,fontWeight:'bold',color:'gray',marginLeft:10}}/>
                            <Picker.Item label=" THREE" value={4} style={{ fontSize:20,fontWeight:'bold',color:'gray',marginLeft:10}}/>
                            <Picker.Item label=" FOUR" value={4} style={{ fontSize:20,fontWeight:'bold',color:'gray',marginLeft:10}}/>
                    </Picker>
                    </View>
                    
                <ScrollView horizontal={true} style={{marginEnd:5}}>
                    <View style={Styles.buttonview}>
                       <Icon name="circle" color='green' size={30} style={{marginLeft:10,marginRight:5,marginBottom:5,marginTop:5}}/>
                        <Text style={{color:'green',fontSize:20,marginBottom:5,marginTop:5}} 
                        onPress={()=> this.props.navigation.navigate('Chapterpage')}>Biology</Text>

                    </View>

                    <View style={Styles.buttonview}>
                       <Icon name="circle" color='green' size={30} style={{marginLeft:10,marginRight:5,marginBottom:5,marginTop:5}}/>
                        <Text style={{color:'green',fontSize:20,marginBottom:5,marginTop:5}}
                        onPress={()=> this.props.navigation.navigate('Chapterpage')}>Physics</Text>

                    </View>

                    <View style={Styles.buttonview}>
                       <Icon name="circle" color='green' size={30} style={{marginLeft:10,marginRight:5,marginBottom:5,marginTop:5}}/>
                        <Text style={{color:'green',fontSize:20,marginBottom:5,marginTop:5}}
                        onPress={()=> this.props.navigation.navigate('Chapterpage')}>Chemistry</Text>

                    </View>

                    <View style={Styles.buttonview}>
                       <Icon name="circle" color='green' size={30} style={{marginLeft:10,marginRight:5,marginBottom:5,marginTop:5}}/>
                        <Text style={{color:'green',fontSize:20,marginBottom:5,marginTop:5}}
                        onPress={()=> this.props.navigation.navigate('Chapterpage')}>Classes</Text>

                    </View>

                    <View style={Styles.buttonview}>
                       <Icon name="circle" color='green' size={30} style={{marginLeft:10,marginRight:5,marginBottom:5,marginTop:5}}/>
                        <Text style={{color:'green',fontSize:20,marginBottom:5,marginTop:5}}
                        onPress={()=> this.props.navigation.navigate('Chapterpage')}>Classes</Text>

                    </View>

                    <View style={Styles.buttonview}>
                       <Icon name="circle" color='green' size={30} style={{marginLeft:10,marginRight:5,marginBottom:5,marginTop:5}}/>
                        <Text style={{color:'green',fontSize:20,marginBottom:5,marginTop:5}}>Classes</Text>

                    </View>
                   
               
                </ScrollView>
                
                    <Text style={{color:'black',fontSize:15,marginLeft:20,marginTop:15}}>Recent courses</Text>
                    
                   

                {/* courser title video add akkan */}
                <ScrollView horizontal={true} style={{marginTop:15}}>

                    <View style={{backgroundColor:'green',width:170,marginTop:0,
                       marginBottom:10,alignItems:'center',justifyContent:'center',marginLeft:20,height:100}}>
                      <ImageBackground source={require('.././Images/Video.jpeg')} style={{ width:'100%',height:'100%',alignItems:'flex-end',flexDirection:'row'}}>
                      <Icon name="play-arrow" size={25} color='white'  style={{marginLeft:10,marginBottom:0}}/>
                        <Text style={{color:'white',fontSize:12,marginLeft:1,marginBottom:5}}>COURSE TITLE</Text>
                        
                        </ImageBackground>
                    </View> 

                    <View style={{backgroundColor:'green',width:170,marginTop:0,
                       marginBottom:10,alignItems:'center',justifyContent:'center',marginLeft:20,height:100}}>
                      <ImageBackground source={require('.././Images/Video.jpeg')} style={{ width:'100%',height:'100%',alignItems:'flex-end',flexDirection:'row'}}>
                      <Icon name="play-arrow" size={25} color='white'  style={{marginLeft:10,marginBottom:0}}/>
                        <Text style={{color:'white',fontSize:12,marginLeft:1,marginBottom:5}}>COURSE TITLE</Text>
                        
                        </ImageBackground>
                    </View> 

                    <View style={{backgroundColor:'green',width:170,marginTop:0,
                       marginBottom:10,alignItems:'center',justifyContent:'center',marginLeft:20,height:100}}>
                      <ImageBackground source={require('.././Images/Video.jpeg')} style={{ width:'100%',height:'100%',alignItems:'flex-end',flexDirection:'row'}}>
                      <Icon name="play-arrow" size={25} color='white'  style={{marginLeft:10,marginBottom:0}}/>
                        <Text style={{color:'white',fontSize:12,marginLeft:1,marginBottom:5}}>COURSE TITLE</Text>
                        
                        </ImageBackground>
                    </View> 

                    <View style={{backgroundColor:'green',width:170,marginTop:0,
                       marginBottom:10,alignItems:'center',justifyContent:'center',marginLeft:20,height:100}}>
                      <ImageBackground source={require('.././Images/Video.jpeg')} style={{ width:'100%',height:'100%',alignItems:'flex-end',flexDirection:'row'}}>
                      <Icon name="play-arrow" size={25} color='white'  style={{marginLeft:10,marginBottom:0}}/>
                        <Text style={{color:'white',fontSize:12,marginLeft:1,marginBottom:5}}>COURSE TITLE</Text>
                        
                        </ImageBackground>
                    </View> 
                    <View style={{backgroundColor:'green',width:170,marginTop:0,
                       marginBottom:10,alignItems:'center',justifyContent:'center',marginLeft:20,height:100}}>
                      <ImageBackground source={require('.././Images/Video.jpeg')} style={{ width:'100%',height:'100%',alignItems:'flex-end',flexDirection:'row'}}>
                      <Icon name="play-arrow" size={25} color='white'  style={{marginLeft:10,marginBottom:0}}/>
                        <Text style={{color:'white',fontSize:12,marginLeft:1,marginBottom:5}}>COURSE TITLE</Text>
                        
                        </ImageBackground>
                    </View> 

                    <View style={{backgroundColor:'green',width:170,marginTop:0,
                       marginBottom:10,alignItems:'center',justifyContent:'center',marginLeft:20,height:100}}>
                      <ImageBackground source={require('.././Images/Video.jpeg')} style={{ width:'100%',height:'100%',alignItems:'flex-end',flexDirection:'row'}}>
                      <Icon name="play-arrow" size={25} color='white'  style={{marginLeft:10,marginBottom:0}}/>
                        <Text style={{color:'white',fontSize:12,marginLeft:1,marginBottom:5}}>COURSE TITLE</Text>
                        
                        </ImageBackground>
                    </View>  

                    <View style={{backgroundColor:'green',width:170,marginTop:0,
                       marginBottom:10,alignItems:'center',justifyContent:'center',marginLeft:20,height:100}}>
                      <ImageBackground source={require('.././Images/Video.jpeg')} style={{ width:'100%',height:'100%',alignItems:'flex-end',flexDirection:'row'}}>
                      <Icon name="play-arrow" size={25} color='white'  style={{marginLeft:10,marginBottom:0}}/>
                        <Text style={{color:'white',fontSize:12,marginLeft:1,marginBottom:5}}>COURSE TITLE</Text>
                        
                        </ImageBackground>
                    </View>  

                    <View style={{backgroundColor:'green',width:170,marginTop:0,
                       marginBottom:10,alignItems:'center',justifyContent:'center',marginLeft:20,height:100}}>
                      <ImageBackground source={require('.././Images/Video.jpeg')} style={{ width:'100%',height:'100%',alignItems:'flex-end',flexDirection:'row'}}>
                      <Icon name="play-arrow" size={25} color='white'  style={{marginLeft:10,marginBottom:0}}/>
                        <Text style={{color:'white',fontSize:12,marginLeft:1,marginBottom:5}}>COURSE TITLE</Text>
                        
                        </ImageBackground>
                    </View>  
                    
                      
                </ScrollView> 

                 <ScrollView horizontal={true}>

                    <View style={{width:220,backgroundColor:'#010b1e',marginTop:20,marginLeft:5,height:350,marginBottom:20,
                       borderRadius:15}}>
                        <View style={{width:'34%',height:'21%',borderRadius:50,backgroundColor:'gray',marginTop:20,marginLeft:30}}>
                        </View>
                        <Text style={{marginTop:30,marginLeft:25,fontSize:20,color:'white'}}>Target live class</Text>
                            <Text style={{marginTop:15,marginLeft:25,fontSize:15,color:'gray'}}> Live class by best</Text>
                            <Text style={{marginLeft:25,fontSize:15,color:'gray'}}>teachers from learningHUB</Text>
                            <Text style={{marginLeft:25,fontSize:15,color:'gray'}}>to clear your Doubt and to provide individual</Text>
                            <Text style={{marginLeft:25,fontSize:15,color:'gray'}}>attenention</Text>
                            <TouchableHighlight style={{marginTop:20,alignItems:'center',justifyContent:'center',
                                                width:150,height:50,backgroundColor:'green',marginLeft:30,borderRadius:10}}>
                                <Text>Book a free Class</Text>
                            </TouchableHighlight>
                    </View>

                    <View style={{width:220,backgroundColor:'#010b1e',marginTop:20,marginLeft:20,height:350,marginBottom:20,
                       borderRadius:15}}>
                        <View style={{width:'34%',height:'21%',borderRadius:50,backgroundColor:'gray',marginTop:20,marginLeft:30}}>
                        </View>
                        <Text style={{marginTop:30,marginLeft:25,fontSize:20,color:'white'}}>Target live class</Text>
                            <Text style={{marginTop:15,marginLeft:25,fontSize:15,color:'gray'}}> Live class by best</Text>
                            <Text style={{marginLeft:25,fontSize:15,color:'gray'}}>teachers from learningHUB</Text>
                            <Text style={{marginLeft:25,fontSize:15,color:'gray'}}>to clear your Doubt and to provide individual</Text>
                            <Text style={{marginLeft:25,fontSize:15,color:'gray'}}>attenention</Text>
                            <TouchableHighlight style={{marginTop:20,alignItems:'center',justifyContent:'center',
                                                width:150,height:50,backgroundColor:'green',marginLeft:30,borderRadius:10}}>
                                <Text>Book a free Class</Text>
                            </TouchableHighlight>
                    </View>

                    <View style={{width:220,backgroundColor:'#010b1e',marginTop:20,marginLeft:20,height:350,marginBottom:20,
                       borderRadius:15}}>
                        <View style={{width:'34%',height:'21%',borderRadius:50,backgroundColor:'gray',marginTop:20,marginLeft:30}}>
                        </View>
                        <Text style={{marginTop:30,marginLeft:25,fontSize:20,color:'white'}}>Target live class</Text>
                            <Text style={{marginTop:15,marginLeft:25,fontSize:15,color:'gray'}}> Live class by best</Text>
                            <Text style={{marginLeft:25,fontSize:15,color:'gray'}}>teachers from learningHUB</Text>
                            <Text style={{marginLeft:25,fontSize:15,color:'gray'}}>to clear your Doubt and to provide individual</Text>
                            <Text style={{marginLeft:25,fontSize:15,color:'gray'}}>attenention</Text>
                            <TouchableHighlight style={{marginTop:20,alignItems:'center',justifyContent:'center',
                                                width:150,height:50,backgroundColor:'green',marginLeft:30,borderRadius:10}}>
                                <Text>Book a free Class</Text>
                            </TouchableHighlight>
                    </View>

                    <View style={{width:220,backgroundColor:'#010b1e',marginTop:20,marginLeft:20,height:350,marginBottom:20,
                       borderRadius:15}}>
                        <View style={{width:'34%',height:'21%',borderRadius:50,backgroundColor:'gray',marginTop:20,marginLeft:30}}>
                        </View>
                        <Text style={{marginTop:30,marginLeft:25,fontSize:20,color:'white'}}>Target live class</Text>
                            <Text style={{marginTop:15,marginLeft:25,fontSize:15,color:'gray'}}> Live class by best</Text>
                            <Text style={{marginLeft:25,fontSize:15,color:'gray'}}>teachers from learningHUB</Text>
                            <Text style={{marginLeft:25,fontSize:15,color:'gray'}}>to clear your Doubt and to provide individual</Text>
                            <Text style={{marginLeft:25,fontSize:15,color:'gray'}}>attenention</Text>
                            <TouchableHighlight style={{marginTop:20,alignItems:'center',justifyContent:'center',
                                                width:150,height:50,backgroundColor:'green',marginLeft:30,borderRadius:10}}>
                                <Text>Book a free Class</Text>
                            </TouchableHighlight>
                    </View>

                    <View style={{width:220,backgroundColor:'#010b1e',marginTop:20,marginLeft:20,height:350,marginBottom:20,
                       borderRadius:15}}>
                        <View style={{width:'34%',height:'21%',borderRadius:50,backgroundColor:'gray',marginTop:20,marginLeft:30}}>
                        </View>
                        <Text style={{marginTop:30,marginLeft:25,fontSize:20,color:'white'}}>Target live class</Text>
                            <Text style={{marginTop:15,marginLeft:25,fontSize:15,color:'gray'}}> Live class by best</Text>
                            <Text style={{marginLeft:25,fontSize:15,color:'gray'}}>teachers from learningHUB</Text>
                            <Text style={{marginLeft:25,fontSize:15,color:'gray'}}>to clear your Doubt and to provide individual</Text>
                            <Text style={{marginLeft:25,fontSize:15,color:'gray'}}>attenention</Text>
                            <TouchableHighlight style={{marginTop:20,alignItems:'center',justifyContent:'center',
                                                width:150,height:50,backgroundColor:'green',marginLeft:30,borderRadius:10}}>
                                <Text>Book a free Class</Text>
                            </TouchableHighlight>
                    </View>




                </ScrollView>  

            </ScrollView>
            
        )
    }
}
const Styles=StyleSheet.create({
    buttonview:{
        width:'20%',
        backgroundColor:'white',
        marginLeft:7,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:5,
        borderWidth:1,
        borderColor:'green',
        borderWidth:1,
        borderColor:'black'
   },
  
})