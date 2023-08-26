import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function ServiceMenuTwo() {
    return (
      <View style = {styles.services}> 
          <Text style = {styles.textname}> Pharmacy</Text>
          <Text style = {styles.textname}> Surgical Services</Text>
          <Text style = {styles.textname}> Ambulance</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
      services: {
        paddingTop:5,
        paddingRight:10,
        paddingLeft:15,
        flexDirection:'row',
        justifyContent: 'space-between',
      },
      textname: {
          color: '#000',
          fontSize: 10,
          fontWeight: 'bold',
          textAlign: 'center'
      }
    });