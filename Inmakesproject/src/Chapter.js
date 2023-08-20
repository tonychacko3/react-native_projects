import React,{Component} from "react";
import { View,TouchableOpacity,Text,StyleSheet,ScrollView} from "react-native";
import Icon  from "react-native-vector-icons/MaterialIcons";

export default class Chapter extends Component{
    render(){
    return(
        <View style={{flex:1}}>
            {/*fist part */}
            <View style={{flex:.3,backgroundColor:'#010b1e',}}>
                <TouchableOpacity style={styles.backbutton}>
                    <Icon name="arrow-back-ios" size={15} color="green"/>
                </TouchableOpacity>
               <Text style={{fontSize:30,color:'white',fontWeight:'600',marginTop:50,marginLeft:30}}>Biology</Text>
               <TouchableOpacity style={{width:'80%',height:'25%',backgroundColor:'#010b1e',marginLeft:30,flexDirection:'row',alignItems:'center'}}>
                    <Icon name="radio-button-checked" size={20} color="green" style={{}}/>
                    <Text style={{fontSize:13,color:'green',margin:4}}>12 chapters</Text>
                    <Icon name="radio-button-checked" size={20} color="green" style={{marginLeft:20}}/>
                    <Text style={{fontSize:13,color:'green',margin:4}}>124 hours</Text>
                </TouchableOpacity>
            </View>
            {/*second part view */}

            <View style={{flex:.7,backgroundColor:'white',alignItems:'center',justifyContent:'space-between'}}>
                {/* main scroll of part views */}
                <ScrollView style={{width:'85%',backgroundColor:'white'}}>
                    {/* ororo part nu vendi ulla views */}
                    <View style={{borderRadius:10,elevation:10,borderColor:'white',backgroundColor:'#efefef',marginBottom:20}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'400',margin:10}}
                         onPress={()=> this.props.navigation.navigate('Mytab')}>Long chapter name can be shown here</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:10}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5}}>chapters</Text>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:20}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5,marginBottom:20}}>3  part</Text>

                        </View>

                    </View>

                    <View style={{borderRadius:10,elevation:10,borderColor:'white',backgroundColor:'#efefef',marginBottom:20}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'400',margin:10}}
                          onPress={()=> this.props.navigation.navigate('Classpage')}>Long chapter name can be shown here</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:10}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5}}>chapters</Text>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:20}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5,marginBottom:20}}>3  part</Text>

                        </View>

                    </View>

                    <View style={{borderRadius:10,elevation:10,borderColor:'white',backgroundColor:'#efefef',marginBottom:20}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'400',margin:10}}
                         onPress={()=> this.props.navigation.navigate('Classpage')}>Long chapter name can be shown here</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:10}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5}}>chapters</Text>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:20}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5,marginBottom:20}}>3  part</Text>

                        </View>

                    </View>

                    <View style={{borderRadius:10,elevation:10,borderColor:'white',backgroundColor:'#efefef',marginBottom:20}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'400',margin:10}}
                         onPress={()=> this.props.navigation.navigate('Classpage')}>Long chapter name can be shown here</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:10}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5}}>chapters</Text>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:20}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5,marginBottom:20}}>3  part</Text>

                        </View>

                    </View>

                    <View style={{borderRadius:10,elevation:10,borderColor:'white',backgroundColor:'#efefef',marginBottom:20}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'400',margin:10}}
                         onPress={()=> this.props.navigation.navigate('Classpage')}>Long chapter name can be shown here</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:10}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5}}>chapters</Text>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:20}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5,marginBottom:20}}>3  part</Text>

                        </View>

                    </View>

                    <View style={{borderRadius:10,elevation:10,borderColor:'white',backgroundColor:'#efefef',marginBottom:20}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'400',margin:10}}
                         onPress={()=> this.props.navigation.navigate('Classpage')}>Long chapter name can be shown here</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:10}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5}}>chapters</Text>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:20}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5,marginBottom:20}}>3  part</Text>

                        </View>

                    </View>

                    <View style={{borderRadius:10,elevation:10,borderColor:'white',backgroundColor:'#efefef',marginBottom:20}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'400',margin:10}}
                         onPress={()=> this.props.navigation.navigate('Classpage')}>Long chapter name can be shown here</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:10}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5}}>chapters</Text>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:20}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5,marginBottom:20}}>3  part</Text>

                        </View>

                    </View>

                    <View style={{borderRadius:10,elevation:10,borderColor:'white',backgroundColor:'#efefef',marginBottom:20}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'400',margin:10}}
                         onPress={()=> this.props.navigation.navigate('Classpage')}>Long chapter name can be shown here</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:10}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5}}>chapters</Text>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:20}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5,marginBottom:20}}>3  part</Text>

                        </View>

                    </View>

                    <View style={{borderRadius:10,elevation:10,borderColor:'white',backgroundColor:'#efefef',marginBottom:20}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'400',margin:10}}
                         onPress={()=> this.props.navigation.navigate('Classpage')}>Long chapter name can be shown here</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:10}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5}}>chapters</Text>
                            <Icon name="radio-button-checked" size={20} color="gray" style={{marginLeft:20}}/>
                            <Text style={{fontSize:13,color:'gray',marginLeft:5,marginBottom:20}}>3  part</Text>

                        </View>

                    </View> 

                </ScrollView>

            </View>

        </View>
    )
}}
const styles=StyleSheet.create({
    backbutton:{width:'8%',
    height:'13%',
    backgroundColor:'#010b1e',
    alignItems:'center',
    justifyContent:'center'
    ,marginLeft:20,
    marginTop:10,
    borderWidth:.5,
    borderColor:'white',
    borderRadius:5

    }
})