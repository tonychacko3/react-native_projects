import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Realm from './Realm';
import LinearGradient from 'react-native-linear-gradient';

export default function HomePage() {
  const [name, setname] = useState('');
  const [phoneNumber, setnumber] = useState(0);
  const [UId, setuid] = useState(1);

  const [user, setuser] = useState(Realm.objects('Profile'));

  function addUser() {
    Realm.write(() => {
      const Data = Realm.create('Profile', {UId, name, phoneNumber});
      setuser(Realm.objects(Data));
      setuid(UId + 1);
     
    });
  }
  function Delete(UId) {
    Realm.write(() => {
      const deleteData = Realm.objectForPrimaryKey('Profile', UId);
      Realm.delete(deleteData);
      setuser(Realm.objects('Profile'));
    });
  }
  function DeleteAll() {
    Realm.write(() => {
      Realm.deleteAll();
    });
  }

  function DataList({item}) {
    return (
      <View>
        <LinearGradient
          colors={['#009900', '#33ff33']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View style={{flexDirection: 'row', paddingLeft: 20}}>
            <Text
              style={{
                borderRadius: 1,
                borderColor: 'black',
                marginLeft: 20,
                marginRight: 20,
              }}>
              {item.UId}
            </Text>
            <Text
              style={{
                borderRadius: 1,
                borderColor: 'black',
                marginLeft: 20,
                marginRight: 20,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                borderRadius: 1,
                borderColor: 'black',
                marginLeft: 20,
                marginRight: 20,
              }}>
              {item.phoneNumber}
            </Text>
            <TouchableOpacity
              style={{
                borderColor: 'black',
                borderWidth: 1,
                marginHorizontal: 20,
                marginVertical: 5,
                backgroundColor: '#006600',
              }}>
              <Text
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  color: 'white',
                }}
                onPress={() => Delete(item.UId)}>
                delete
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 0.5,
            marginBottom: 10,
            marginTop: 50,
          }}
          placeholder="Name"
          onChangeText={text => setname(text)}></TextInput>
        <TextInput
          style={{borderColor: 'black', borderWidth: 0.5, marginBottom: 10}}
          placeholder="MobileNumber"
          keyboardType="number-pad"
          maxLength={10}
          onChangeText={title => setnumber(parseInt(title))}></TextInput>

        <Button title="Add" onPress={() => addUser()} />
        
      </View>

      <View>
        <View style={{flexDirection: 'row', padding: 20}}>
          <Text
            style={{
              color:'black',
              marginLeft: 20,
              marginRight: 20,
            }}>
            ID
          </Text>
          <Text
            style={{
              color:'black',
              marginLeft: 20,
              marginRight: 20,
            }}>
            Name
          </Text>
          <Text
            style={{
              color:'black',
              marginLeft: 20,
              marginRight: 20,
            }}>
            Mobile Number
          </Text>
          <Button title="DELETEALL" onPress={() => DeleteAll()} />
        </View>
        <FlatList data={user} renderItem={item => DataList(item)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'gray'
    // justifyContent: 'center',
  },
  button: {
    margin: 20,
    width: 200,
  },
});
