import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {} from '@expo/vector-icons';
import { Fontisto,FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons';

export default function ServiceIconsTwo() {
    return (
      <View style = {styles.services}> 
        <FontAwesome5 name="clinic-medical" size={23} style = {styles.box}/>
        <Fontisto name="injection-syringe" size={24} style = {styles.box}/>
        <FontAwesome5 name="ambulance" size={23} style = {styles.box}/>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
      services: {
        paddingTop:35,
        paddingStart:10,
        paddingEnd:1,
        flexDirection:'row',
        justifyContent: 'space-between'
      },
      box: {
        backgroundColor: 'rgba(79,195,247,0.6)', 
        padding: 20,
        color: '#fff',
        borderRadius: 20
      }
    });