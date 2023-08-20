import React,{Component} from "react";
import { View,Text,Image,StyleSheet,TouchableHighlight,FlatList,ScrollView} from "react-native";
import  Icon  from "react-native-vector-icons/MaterialIcons"



 const listofitem=[
                  {icon:<TouchableHighlight style={{width:25,height:25,borderRadius:6,borderWidth:1.5,borderColor:'green'}}><Text></Text></TouchableHighlight>,
                  title:"Exam corner"},

                  {icon:<TouchableHighlight style={{width:25,height:25,borderRadius:6,borderWidth:1.5,borderColor:'green'}}><Text></Text></TouchableHighlight>,
                  title:"Subrscriptions"},

                  {icon:<TouchableHighlight style={{width:25,height:25,borderRadius:6,borderWidth:1.5,borderColor:'green'}}><Text></Text></TouchableHighlight>,
                 title:"Analytics"},

                 {icon:<TouchableHighlight style={{width:25,height:25,borderRadius:6,borderWidth:1.5,borderColor:'green'}}><Text></Text></TouchableHighlight>,
                 title:"Downloads"},

                 {icon:<TouchableHighlight style={{width:25,height:25,borderRadius:6,borderWidth:1.5,borderColor:'green'}}><Text></Text></TouchableHighlight>,
                 title:"Notifications"},

                 {icon:<TouchableHighlight style={{width:25,height:25,borderRadius:6,borderWidth:1.5,borderColor:'green',}}><Text></Text></TouchableHighlight>,
                 title:"Referrals"},

                 {icon:<TouchableHighlight style={{width:25,height:25,borderRadius:6,borderWidth:1.5,borderColor:'green'}}><Text></Text></TouchableHighlight>,
                 title:'Share app'}

 ]

function rendrItem  ({item}) {
    return(
    <View style={{backgroundColor:"black"}}>
        <View style={{flexDirection:"row",marginTop:20}}>
    <Text style={{marginLeft:20}}>{item.icon}</Text>
    <Text style={{color:'white',marginLeft:20,fontSize:15,fontWeight:'bold',marginBottom:10}}>{item.title}</Text></View>
    <View style={{alignItems:'center',justifyContent:"center"}}>
        <Text numberOfLines={1} style={{backgroundColor:"white",width:'90%',height:1,marginTop:5,marginBottom:3}}></Text>
    </View>
    </View>
)}
    export default class Drawercontent extends Component{
        // constructor(){
        //     super();
        //     this.state={
        //         listofitem:[
        //             {icon:"",

        //                  title:"hello"},
        //             {icon:"aje", title:"22"},
        //             {icon:"libin",title:"hey"}
        //         ]
        //     }
        // }
        // (enganeyum flatlist il data pass cheyyam array create cheythu data={(kodukkumbol)this.state.variable name koduthal mathi})

        
        render(){
        
    
        return(
            <View style={{flex:1,backgroundColor:"black"}}>
                <TouchableHighlight style={{backgroundColor:'black',width:35,height:35,
                marginTop:30,marginLeft:30,alignItems:'center',justifyContent:'center',borderRadius:5,borderColor:'white',borderWidth:1}}>
                <Icon name="clear" size={18} color={'green'}/>
                </TouchableHighlight>
                <View style={{flex:.4,backgroundColor:'black',marginTop:25,flexDirection:'row'}}>
                    <View style={{borderRadius:50,backgroundColor:'white',width:100,height:100,marginLeft:20}}>
                        <Image source={require('../Images/wellcomepage.jpg')} 
                        style={{borderRadius:50,backgroundColor:'white',width:100,height:100,borderWidth:3,borderColor:'green'}}/>
                    </View>
                    <View>
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginTop:20,marginLeft:15}}>Aaron Taylor</Text>
                        <Text style={{color:'white',fontSize:13,marginLeft:15,marginTop:2}}>Id:1234</Text>
                    </View>
                    
                </View>
                <View style={{flex:1.5,backgroundColor:'black'}}>
                    <FlatList data={listofitem} renderItem={rendrItem}/>
                   
    
                    <View style={{flexDirection:'row'}}>
                    <TouchableHighlight style={{width:25,height:25,borderRadius:6,borderWidth:1.5,borderColor:'red',marginLeft:20}}><Text></Text></TouchableHighlight>
                    <Text style={{color:'red',marginLeft:20,fontSize:15,fontWeight:'bold'}}>Logout</Text>
                    </View>
                    <TouchableHighlight style={{width:'75%',height:40,borderRadius:6,borderWidth:1.5,borderColor:'green',marginBottom:40,marginLeft:30,marginTop:35,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'green',fontSize:20,fontWeight:'300'}}>Enquire now</Text></TouchableHighlight>
                        

                    
                   
                    

                    
                    

                </View>
                

              
                
             
               
          
           </View>
        )
    }}
   