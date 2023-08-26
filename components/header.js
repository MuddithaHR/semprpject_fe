import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {Entypo ,MaterialIcons,FontAwesome} from '@expo/vector-icons';

export default function Header() {
  return (
    <View style = {styles.header}> 
        <Entypo  name = 'menu' size = {30} style = {styles.listicon} />
        <View>
        <Text style = {styles.title}> KH Medical Center</Text>
        </View>
        <FontAwesome name="user-circle-o" size={35} style = {styles.profileicon}/>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      height: 80,
      paddingTop:35,
      backgroundColor: '#1976D2',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
    },
    listicon: {
        position: 'absolute',
        left: 16,
        paddingTop:35,
        color: '#fff'
    },
    profileicon: {
        position: 'absolute',
        right: 16,
        paddingTop:35,
        color: '#fff'
    }
  });