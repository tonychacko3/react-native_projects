import {Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CartItem from '../assets/images/constant/CartItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector,useDispatch} from "react-redux"
import { AddtoCart } from '../redux/Action';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  const navigarion=useNavigation()
  const data=useSelector((state)=>state)
  const dispatch=useDispatch()
  let count=[];
  count=data;

  const additem=(item)=>{
    dispatch(AddtoCart(item))
  }
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height:  45,
          alignItems: 'center',
          borderBottomColor: 'black',
          borderBottomWidth: 0.5,
          justifyContent: 'space-between',
          paddingHorizontal: 10,
         
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Books
        </Text>
        <TouchableOpacity onPress={()=>{navigarion.navigate('Mycart')}}>
        
        
        </TouchableOpacity>
        <View style={styles.cartcount}>
          <Text style={{color:'white'}}>{count.length}</Text>
        </View>
      </View>
      {CartItem.map((item, index) => (
        <View
          key={index}
          style={{
            width: '100%',
            height: 150,
            backgroundColor: 'white',
            padding: 10,
            borderWidth: 0.5,
          }}>
          <View
            style={{
              width: '30%',
              height: 130,
              //backgroundColor: 'yellow',
              flexDirection: 'row',
            }}>
            <Image
              source={item.images}
              style={{height: '100%', width: '100%'}}
            />
            <View style={{padding: 10}}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
                {item.title}
              </Text>
              <Text style={{fontSize: 13, color: 'black'}}>{item.auther}</Text>
              <TouchableOpacity
              onPress={()=>additem(item)}
                style={{
                  width: 45,
                  height: 25,
                  backgroundColor: 'blue',
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Text style={{color: 'white', fontSize: 12}}>Add +</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cartcount: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    position:'absolute',
    right:27,
    bottom:15
  },
});
