import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {Entypo ,MaterialIcons,FontAwesome} from '@expo/vector-icons';

export default function ServiceMenu() {
    return (
      <View style = {styles.services}> 
          <Text style = {styles.textname}> Channel Doctors</Text>
          <Text style = {styles.textname}> Medical Tests</Text>
          <Text style = {styles.textname}> Monitor Health</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
      services: {
        paddingTop:5,
        flexDirection:'row',
        justifyContent: 'space-between'
      },
      textname: {
          color: '#000',
          fontSize: 10,
          fontWeight: 'bold',
      }
    });