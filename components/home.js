import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header'
import ServiceIcons from './serviceicons';
import ServiceMenu from './servicesmenu';
import ServiceIconsTwo from './serviceicons2';
import ServiceMenuTwo from './servicemenu2';
import {Ionicons} from '@expo/vector-icons';

const Home = ({navigation}) => {

    const getChat = () => {
        navigation.push('ChatScreen');
      };

  return (
    <View style={styles.container}>
    <Header/>
    <View style = {styles.content}>
      <Text style = {styles.text1}>All the Medical Services {'\n'}from One Place</Text>
      <View style = {styles.menus}>
        <ServiceIcons/>
        <ServiceMenu/>
        <ServiceIconsTwo/>
        <ServiceMenuTwo/>
      </View>
      <Text style = {styles.text2}> Now you can access our services by chatting with our chatbot in Sinhala</Text>
    </View>
    <View style = {styles.chatbox}>
        <Ionicons name="chatbox-ellipses" size={50} style = {styles.chaticon} onPress={getChat}/>
      </View>
  </View>

  )
}

const styles = StyleSheet.create({
    chatbox:{
      position: "absolute", bottom: 30, right: 30
    },
    container: {
      flex: 1,
      backgroundColor: '#EEF4FB',
    },
    content: {
      padding: 20,
    },
    menus: {
      padding: 20,
      backgroundColor: '#D6EAF5',
      borderRadius: 15,
    },
    text1:{
      textAlign: 'center',
          color: '#1976D2',
          fontSize: 25,
          fontWeight: 'bold',
          marginBottom: 25,
          lineHeight:35,
          padding:10,
          borderRadius: 5,
          marginTop: 15,
          //borderWidth: 4,
      //borderColor: "#1976D2",
      borderRadius: 5,
      backgroundColor: '#C2E8FD',
    },
    text2:{
      textAlign: 'center',
          color: '#fff',
          fontSize: 25,
          fontWeight: 'bold',
          marginBottom: 25,
          lineHeight:35,
          padding:15,
          borderRadius: 5,
          marginTop: 25,
          //borderWidth: 4,
      //borderColor: "#1976D2",
      borderRadius: 10,
      backgroundColor: '#1976D2',
    },
    chaticon: {
        color: '#fff',
        backgroundColor: '#0D47A1',
        padding: 15,
        height: 80,
        width: 80,
        borderRadius: 40,
    
    }
  });

export default Home;