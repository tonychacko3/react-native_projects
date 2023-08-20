import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

function Display({item}) {
  return (
    <View
      style={styles.maincontainer}>
      <View style={{width: '30%', height: 110, backgroundColor: 'red'}}>
        <Image
          source={{uri: item.strMealThumb}}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={{paddingLeft: 10}}>
        <Text style={{fontSize:15,color:'#ff1a75',fontWeight:'bold',paddingBottom:5}}>{item.strMeal}</Text>
        <Text style={{fontSize:13,color:'#ff3300',paddingBottom:5}}>{item.strCategory}</Text>
        <Text style={{fontSize:13,color:'#ff704d'}}>{item.strTags}</Text>
      </View>
    </View>
  );
}

export default function HomePage() {
  async function AxiosDemo() {
    try {
      let fooddata = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/search.php?f=c',
      );
      let menus = fooddata.data.meals;
      setmeal(menus);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchdemo() {
    try {
      let sample = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?f=a',
      );
      let totalData = await sample.json();
      setmeal(totalData.meals);

      // console.log(meal)
    } catch (error) {
      console.log(error);
    }
  }
  const [meal, setmeal] = useState([]);

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={() => AxiosDemo()}>
          <Text style={{fontSize:13,color:'black',fontWeight:'bold'}}>Axios Apicall</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            fetchdemo();
          }}>
          <Text style={{fontSize:13,color:'black',fontWeight:'bold'}}>Fetch Apicall</Text>
        </TouchableOpacity>
      </View>
      {meal && <FlatList data={meal} renderItem={item => Display(item)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer:{
    flexDirection: 'row',
    width: '100%',
    height: 130,
    backgroundColor: '#ffffe6',
    paddingTop: 10,
    paddingLeft: 10,
    borderColor:'#ccff66',
    borderWidth:0.5,

  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor:'#999999',
  },
  touchable: {
    borderWidth: 0.5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#737373',
    elevation:2,borderColor:'#737373'
    
  },
});
