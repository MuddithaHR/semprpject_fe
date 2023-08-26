import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    if(email == 'a' && password == '123'){
      navigation.push('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>USER LOGIN</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} style = {styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#1976D2',
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#001'
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#D6EAF5',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 25,
    padding: 10,
    borderRadius: 10
  },
  button: {
    marginTop: 30,
    padding: 200,
    borderRadius : 10
  }
});

export default LoginScreen;