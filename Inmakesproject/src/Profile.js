import React,{Component} from "react";
import { View,ScrollView,TouchableHighlight,Text,ImageBackground,Image,FlatList} from "react-native";
import  Icon  from "react-native-vector-icons/MaterialIcons";

export default function Profile(){
//     const personalifo=[
//         {Id:"Account Settings",name:"Aaron Taylor"},
//         {Id:"Email",name:'emailid123@server.com'},
//         {Id:'number',name:'+91 9876543210'}

//     ]
//    function renderItem({item}){(
//         <View style={{flexDirection:'row'}}>
//             <Text>{item.Id}</Text>
//             <Text>{item.name}</Text>
//         </View>
//     )}
    return(
  
       <View style={{flex:1}}>
        <ImageBackground source={require('../Images/logo.jpg')} style={{width:"100%",height:'100%',alignItems:'center'}}>
            <Text style={{color:'white',fontSize:30,fontWeight:"400",marginTop:10}}>Profile</Text>
            <View style={{flexDirection:'row',}}>
           
                <Icon name="notifications" size={30} color='white' style={{marginLeft:250}}/>
                <TouchableHighlight style={{borderWidth:.5,borderColor:'white',alignItems:'center',justifyContent:'center',marginLeft:15}}><Icon name={'dashboard'} size={30} color={'#0cb53f'}/></TouchableHighlight>
            </View>
            <View style={{backgroundColor:'#cfccd6',width:'90%',height:'100%',marginTop:25,borderRadius:10}}>
                <ScrollView style={{backgroundColor:'greeen',width:'100%',height:'100%',marginTop:1,marginBottom:35}}>
                    <View  style={{borderRadius:50,backgroundColor:'white',width:100,height:100,marginLeft:10,marginTop:10,flexDirection:'row'}}>
                        <Image source={require('../Images/wellcomepage.jpg')} style={{borderRadius:50,backgroundColor:'white',width:100,height:100,borderWidth:3,borderColor:'green'}}/>
                        <View style={{marginLeft:10,marginTop:25}}>
                        <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Jane Doe</Text>
                        <Text style={{color:'black',fontSize:13,fontWeight:'200'}}>ID:12345678</Text>
                        </View>
                    </View>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginTop:3,marginLeft:30}}>Personal info</Text>
                    <Text numberOfLines={1} style={{backgroundColor:'gray',width:'100%',height:'.1%',marginTop:20}}></Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:15,marginLeft:13,fontWeight:'300',marginTop:10,color:'black'}}>Account Settings</Text>
                        <Text style={{fontSize:15,marginLeft:10,fontWeight:'bold',marginTop:10,color:'black'}}>Aaron Taylor</Text>
                    </View>
                    <Text numberOfLines={1} style={{backgroundColor:'gray',width:'95%',height:'.1%',marginTop:10,marginLeft:5,marginRight:5}}></Text>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:15,marginLeft:13,fontWeight:'300',marginTop:10,color:'black'}}>Email</Text>
                        <Text style={{fontSize:15,marginLeft:60,fontWeight:'bold',marginTop:10,color:'black'}}>emailid123@server.com'</Text>
                    </View>
                    <Text numberOfLines={1} style={{backgroundColor:'gray',width:'95%',height:'.1%',marginTop:10,marginLeft:5,marginRight:5}}></Text>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:15,marginLeft:13,fontWeight:'300',marginTop:10,color:'black'}}>Number</Text>
                        <Text style={{fontSize:15,marginLeft:40,fontWeight:'bold',marginTop:10,color:'black'}}>+91 9876543210</Text>
                    </View>
                    <Text numberOfLines={1} style={{backgroundColor:'gray',width:'95%',height:'.1%',marginTop:10,marginLeft:5,marginRight:5}}></Text>
                    <Text style={{fontSize:20,color:'black',marginTop:10,marginBottom:10,fontWeight:'500',marginLeft:15}}>Course Info</Text>
                    <Text numberOfLines={1} style={{backgroundColor:'gray',width:'95%',height:'.1%',marginTop:5,marginLeft:5,marginRight:5}}></Text>
                    
                     {/* personal ifos adikkan ulla view annu eny ullethu*/}
                     
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:15,marginLeft:13,fontWeight:'300',marginTop:10,color:'black'}}>Center</Text>
                        <Text style={{fontSize:15,marginLeft:85,fontWeight:'bold',marginTop:10,color:'black'}}>Inmakes edu</Text>
                    </View>
                    <Text numberOfLines={1} style={{backgroundColor:'gray',width:'95%',height:'.1%',marginTop:10,marginLeft:5,marginRight:5}}></Text>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:15,marginLeft:13,fontWeight:'300',marginTop:10,color:'black'}}>Course</Text>
                        <Text style={{fontSize:15,marginLeft:80,fontWeight:'bold',marginTop:10,color:'black'}}>Plus Two Science</Text>
                    </View>
                    <Text numberOfLines={1} style={{backgroundColor:'gray',width:'95%',height:'.1%',marginTop:10,marginLeft:5,marginRight:5}}></Text>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:15,marginLeft:13,fontWeight:'300',marginTop:10,color:'black'}}>Payment Status</Text>
                        <Text style={{fontSize:15,marginLeft:23,fontWeight:'bold',marginTop:10,color:'black'}}>Free</Text>
                    </View>
                    <Text numberOfLines={1} style={{backgroundColor:'gray',width:'95%',height:'.1%',marginTop:10,marginLeft:5,marginRight:5}}></Text>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:15,marginLeft:13,fontWeight:'300',marginTop:10,color:'black'}}>Expiry Date</Text>
                        <Text style={{fontSize:15,marginLeft:53,fontWeight:'bold',marginTop:10,color:'black'}}>Not Applicable</Text>
                    </View>
                    <Text numberOfLines={1} style={{backgroundColor:'gray',width:'95%',height:'.1%',marginTop:10,marginLeft:5,marginRight:5}}></Text>

                    {/* last box nu venda view*/}
                    <View style={{width:'90%',height:'8.5%',marginLeft:10,flexDirection:'row',backgroundColor:'#0cb53f',marginTop:20,borderRadius:10,alignItems:'center'}}>
                    <TouchableHighlight style={{alignItems:'center',justifyContent:'center',marginLeft:15,height:'50%',width:'13%',borderRadius:5,backgroundColor:'green'}}>
                        <Icon name={'payment'} size={20} color={'white'}/></TouchableHighlight>
                        <Text style={{fontSize:15,marginLeft:15,color:'white',fontWeight:'bold'}}>Custom Payment</Text>
                    </View>

                    <View style={{width:'90%',height:'8.5%',marginLeft:10,flexDirection:'row',backgroundColor:'#0cb53f',marginTop:20,marginBottom:30,borderRadius:10,alignContent:'center'}}>
                    <TouchableHighlight style={{alignItems:'center',justifyContent:'center',marginLeft:15,height:'50%',width:'13%',borderRadius:5,backgroundColor:'green',marginTop:15}}>
                        <Icon name={'forward'} size={20} color={'white'}/></TouchableHighlight>
                        <Text style={{fontSize:15,marginLeft:15,color:'white',fontWeight:'bold',marginTop:20}}>Referrals</Text>
                    </View>
                  


                </ScrollView>

            </View>
       

</ImageBackground>
        
       </View>
    )}