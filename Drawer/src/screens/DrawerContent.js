import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const profilepic = require('../images/crown.png');

export default function DrawerContent() {
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <View style={styles.topsubcontainer}>
          <View style={styles.topfirstcontainer}>
            <Image source={profilepic} style={styles.crownimage} />
          </View>
          <View style={styles.topsecondcontainer}>
            <Text style={styles.nametext}>Favaz</Text>
            <View style={styles.topthirdcontainer}>
              <Text style={styles.goldtext}>Gold</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomsubcontainer}>
          <View style={styles.bottomfirstcontainer}>
            <Text style={styles.invitetext}>Invite</Text>
          </View>
          <View style={styles.bottomsecondcontainer}>
            <Text style={styles.totaltext}>Total Coin</Text>
            <Text style={styles.cointext}>coin : 20000</Text>
          </View>
        </View>
      </View> 
      <View style={styles.lastcontainer}>
      <ScrollView>
        <View style={{paddingTop: 30, paddingLeft: 20}}>
          <Text style={styles.lasttexts}>Home</Text>
          <View style={styles.lineview} />

          <Text style={styles.lasttexts}>Profile</Text>
          <View style={styles.lineview} />

          <Text style={styles.lasttexts}>Wallet Balance</Text>
          <View style={styles.lineview} />

          <Text style={styles.lasttexts}>Records</Text>
          <View style={styles.lineview} />

          <Text style={styles.lasttexts}>Refund and Policies</Text>
          <View style={styles.lineview} />

          <Text style={styles.lasttexts}>Settings</Text>
          <View style={styles.lineview} />

          <Text style={styles.lasttexts}>About Us</Text>
          <View style={styles.lineview} />

          <Text style={styles.lasttexts}>Help</Text>
          <View style={styles.lineview} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '30%',
            paddingBottom:10
          }}>
          <Text style={{color: 'black'}}>Logout</Text>
        </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  topcontainer: {
    backgroundColor: 'black',
    flex: 0.25,
    justifyContent: 'space-between',
    paddingVertical: 30,
    // paddingLeft: 10,
    //paddingRight: 10,
  },
  lastcontainer: {
    backgroundColor: 'white',
    flex: 0.75,
  },
  topsubcontainer: {
    flexDirection: 'row',
    //paddingTop: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  topfirstcontainer: {
    height: '65%',
    width: '32%',
  },
  topsecondcontainer: {
    alignItems: 'center',
  },
  topthirdcontainer: {
    paddingHorizontal: 20,
    backgroundColor: 'gray',
    borderRadius: 3,
  },
  bottomsubcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 15,
    paddingLeft: 5,
  },
  bottomfirstcontainer: {
    height: 20,
    width: 85,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  bottomsecondcontainer: {
    paddingRight: 5,
    paddingTop: 10,
  },
  crownimage: {
    width: '100%',
    height: '100%',
  },
  nametext: {
    color: 'white',
    fontSize: 20,
  },
  goldtext: {
    color: 'white',
    fontSize: 10,
  },
  invitetext: {
    color: 'black',
    fontSize: 13,
    fontWeight: '500',
  },
  totaltext: {
    color: 'white',
    fontSize: 13,
  },
  cointext: {
    color: 'white',
    fontSize: 12,
  },
  lasttexts: {
    fontSize: 16,
    color: 'black',
    marginVertical: 10,
    // borderBottomWidth: 0.5,
  },
  lineview: {
    backgroundColor: 'black',
    width: '100%',
    height: 0.5,
  },
});
