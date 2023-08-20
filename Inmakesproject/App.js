import React,{Component} from "react";
import { View,TouchableHighlight,Text,StyleSheet,TouchableOpacity } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialIcons";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Firstpage from "./src/firstpage";
import Secondpage from "./src/secondpage";
import Thirdpage from "./src/Thirdpage";
import Forthpage from "./src/Fourthpage";
import Welcomepageone from "./src/Welcomepageone";
import Welcomepagetwo from "./src/Welcomepagetwo";
import Welcomepagethree from "./src/Welcomepagethree";
import Welcomepagelast from "./src/Welcomepagelast";
import Drawercontent from "./src/Drawercontent";
import Home from "./src/Home";
import Profile from "./src/Profile";
import Chapter from "./src/Chapter";
import Classpage from "./src/Classpage";





const Stack=createStackNavigator()
const Drawer= createDrawerNavigator()
const BottomTab= createBottomTabNavigator()
const Tab= createMaterialTopTabNavigator()

function Mystack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Firstpage" component={Firstpage}
             options={{headerShown:false }} />
            <Stack.Screen name="Secondpage" component={Secondpage} 
             options={{headerShown:false }}/>
            <Stack.Screen name="Thirdpage" component={Thirdpage}
             options={{headerShown:false }}/>
            <Stack.Screen name="Fourthpage" component={Forthpage}
             options={{headerShown:false }}/>
            <Stack.Screen name="Welcomepage1" component={Welcomepageone}
             options={{headerShown:false }}/>
            <Stack.Screen name="Welcomepage2"component={Welcomepagetwo}
             options={{headerShown:false }}/>
            <Stack.Screen name="Welcomepage3" component={Welcomepagethree}
             options={{headerShown:false }}/>
            <Stack.Screen name="Welcomepage4" component={Welcomepagelast}
             options={{headerShown:false }}/>
             <Stack.Screen name="Chapterpage" component={Chapter} options={{headerShown:false}}/>
             <Stack.Screen name="Classpage" component={Classpage} options={{headerShown:false}}/>
             <Stack.Screen name="myDrower" component={Mydrawer} options={{headerShown:false}} />
             <Stack.Screen name="MyBottom" component={MyBottom} options={{headerShown:false}}/>
             <Stack.Screen name="Mytab" component={MyTab} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

function Abc({nav,title}){  
    /* 2 variables edukkuka header il ninnu varunna navigation,route store cheyyan "route" il aa screente 
     name aanu varunnathu next step nammekku usecheyyanda place il onPress={()=> nav.openDrawer()} use opendrawer react lybrary aanu*/


    return(
    <View style={Styles.container}>
        <TouchableHighlight style={Styles.drawericon} onPress={()=> nav.openDrawer()}>
            <Icon name='grid-view' size={20} color='green'/>
        </TouchableHighlight>

                  {/*   <Text>{title}</Text>  ee code koduthal page name print cheyyam */}

         {/* inmakes matrem ezhuthan ulla view*/}
        <View style={{ alignItems:'center'}}> 
            <Text style={{fontSize:10,fontWeight:'bold',color:'#1e2121',marginTop:0}}>Inmakes</Text>
            <Text style={{fontSize:13,fontWeight:'bold',color:'#1e2121',marginTop:-6,marginLeft:37}}>Learning Hub</Text>
         </View>
        
        {/* button undakkan ulla View */}
        <View style={Styles.buttonview}>
            <Icon name="circle" color='green' size={20} style={{marginLeft:10,marginRight:5}}/>
            <Text style={{color:'green'}}>Classes</Text>

        </View>

    </View>
    )
}



function Mydrawer(){
    return(
        <Drawer.Navigator 
        drawerContent={()=><Drawercontent/>}

       /* evideyanu navigation vazhi drawer head design cheyyan ulla code mukalil ulla 
       functione component ayy pass cheythu 2 values pass cheythu vidunnu athinu header use cheyyunnu*/

        screenOptions={{
            header:({navigation,route})=>(
                <Abc nav={navigation} title={route.name}/>
            )
            
            
        }}>
            <Drawer.Screen  name="Home" component={Home}/>
            <Drawer.Screen name="Welcomepage3" component={Welcomepagethree}/>
        </Drawer.Navigator>

    )
}

function MyBottom(){
    return(
        <BottomTab.Navigator
        screenOptions={{
            tabBarItemStyle:{width:100},
            tabBarStyle:{backgroundColor:'white',width:'85%',position:"absolute",marginBottom:80,
            borderRadius:20,marginLeft:30,height:65,},
            tabBarLabelStyle:{fontSize:10},
            tabBarLabelPosition:'beside-icon',
            
            
        }}>

            <BottomTab.Screen name="Myhome" component={Mydrawer} options={{headerShown:false,
           tabBarActiveTintColor:"blue",tabBarInactiveTintColor:'gray',
           tabBarIcon:({focused})=>
           focused ? <Icon name="home" size={20} color='green'/>:<Icon name="home" size={20} color='gray'/>,
           tabBarLabel:({focused})=>{
            if(focused){
                return <Text style={{color:'green',marginLeft:10,marginTop:5,fontSize:10,fontWeight:"bold"}}> Home</Text>
            }
            else{
                return null;
            }
          } }} 
           />

            <BottomTab.Screen name="Profile" component={Profile} options={{headerShown:false,
           tabBarActiveTintColor:"blue",tabBarInactiveTintColor:'gray',
           tabBarIcon:({focused})=>
           focused ? <Icon name="person" size={20} color='green'/>:<Icon name="person" size={20} color='gray'/>,
           tabBarLabel:({focused})=>{
            if(focused){
               return <Text  style={{color:'green',marginLeft:15,marginTop:5,fontSize:10,fontWeight:"bold"}}>profile</Text>

            }
            else
            return null
        }
           
           
       }}/>

            <BottomTab.Screen name="Recent" component={Recent} options={{headerShown:false,
            tabBarIcon:({focused})=>
            focused ? <Icon name="play-arrow" size={20} color='green'/>:<Icon name="play-arrow" size={20} color='gray'/>,
            tabBarLabel:({focused})=>{
            if(focused){
                return <Text  style={{color:'green',marginLeft:15,marginTop:5,fontSize:10,fontWeight:"bold"}}>Recent</Text>
               }
            else
            return null
               }
       }} 
            />

            <BottomTab.Screen name="Exam" component={Exam} options={{headerShown:false,
            tabBarIcon:({focused})=>
            focused ? <Icon name="menu-book" size={20} color="green"/>:<Icon name="menu-book" size={20} color="gray"/>,
            tabBarLabel:({focused})=>{
                if(focused){
                    return <Text  style={{color:'green',marginLeft:15,marginTop:5,fontSize:10,fontWeight:"bold"}}>Exam</Text>
                }
                else
                return null

            }
        }}
            />
            <BottomTab.Screen name="Contact" component={Contact} options={{headerShown:false,
                tabBarIcon:({focused})=>
                focused ? <Icon name="mail" size={20} color="green"/>:<Icon name="mail" size={20} color="gray"/>,
                tabBarLabel:({focused})=>{
                    if(focused){
                        return <Text  style={{color:'green',marginLeft:15,marginTop:5,fontSize:12,fontSize:10,fontWeight:"bold"}}>Contact</Text>
                    }
                }
        }}/>

        </BottomTab.Navigator>
    )
}
function Recent(){
    return(
        <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
            <Text>No date</Text>
        </View>
    )
}
function Exam(){
    return(
        <View style={{flex:1,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
            <Text>No data</Text>
        </View>
    )
}
function Contact(){
    return(
        <View style={{backgroundColor:'tomato',alignItems:'center',justifyContent:'center',flex:1}}>
            <Text>No data</Text>
        </View>
    )
}
function Qnbank(){
    return(
        <View style={{backgroundColor:'tomato',alignItems:'center',justifyContent:'center',flex:1}}>
        <Text>No data</Text>
    </View>
       
    )
}


// tabtop navigation

function MyTab(){
    return(
        // ee views use cheythathu hearder part desigin cheyyan aanu

        <View style={{flex:1}}>
           <View style={{flex:.35,backgroundColor:'#010b1e',}}>
                <TouchableOpacity style={Styles.backbutton}>
                    <Icon name="arrow-back-ios" size={15} color="green"/>
                </TouchableOpacity>
               <Text style={Styles.contentText}>Long chapter can be shown here</Text>
               <TouchableOpacity style={{width:'80%',height:'25%',backgroundColor:'#010b1e',marginLeft:30,flexDirection:'row',alignItems:'center'}}>
                    <Icon name="radio-button-checked" size={20} color="green" style={{}}/>
                    <Text style={{fontSize:13,color:'green',margin:4}}>12 chapters</Text>
                    <Icon name="radio-button-checked" size={20} color="green" style={{marginLeft:20}}/>
                    <Text style={{fontSize:13,color:'green',margin:4}}>124 hours</Text>
                </TouchableOpacity>
            </View>
        
        <Tab.Navigator  screenOptions={{
            tabBarStyle:{width:'100%',backgroundColor:'#010b1e',},
            tabBarLabelStyle:{color:'white',fontSize:10}
             }}>

            <Tab.Screen name="Videos" component={Classpage}/>
            <Tab.Screen name="Chapter" component={Exam}/>
            <Tab.Screen name="Resourse" component={Contact}/>
            <Tab.Screen name="QN bank" component={Qnbank}/>
        </Tab.Navigator>
        </View>
       
        
    )
}
export default function App(){
    return(
        <NavigationContainer>
           
         <Mystack/>
          
        </NavigationContainer>
        
        
        
    )
}
const Styles=StyleSheet.create({
    container:{flexDirection:'row',
    height:50,
    backgroundColor:'#fffffff',
    alignItems:'center',
    },
    drawericon:{ marginLeft:20,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'gray',
        width:'7%',
        alignItems:'center',
         justifyContent:'center'},
         
    buttonview:{
         width:'26%',
         height:'70%',
         backgroundColor:'white',
         marginLeft:80,
         flexDirection:'row',
         alignItems:'center',
         borderRadius:5,
         borderWidth:1,
         borderColor:'green'
    },
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
    },
    contentText:{
        fontSize:30,
        color:'white',
        fontWeight:'600',
        marginTop:10,
        marginLeft:30
    }

})