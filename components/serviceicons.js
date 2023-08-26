import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {} from '@expo/vector-icons';
import { FontAwesome,FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons';

export default function ServiceIcons() {
    return (
      <View style = {styles.services}> 
        <FontAwesome5 name="stethoscope" size={24} style = {styles.box}/>
        <MaterialCommunityIcons name="test-tube" size={24} style = {styles.box}/>
        <FontAwesome name="heartbeat" size={24} style = {styles.box}/>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
      services: {
        paddingTop:5,
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