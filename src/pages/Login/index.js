import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';

export default function Login({navigation}) {
 
  return (
    <View style={styles.container}>
     
        <Text style={styles.title}>Usuário</Text>
        <TextInput style={styles.input}></TextInput>
        
        <Text style={styles.title}>Senha</Text>
        <TextInput style={styles.input}></TextInput>
        
        <TouchableOpacity 
        style={styles.startButton}      
        onPress={ () => navigation.navigate('Identificacao')}
        >
            <Text style={styles.buttonEntrar}>Entrar</Text>
        </TouchableOpacity>  
    </View>
  );
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color:'#fff',
    marginVertical:15,
    fontSize:24,
  },
  input:{
    backgroundColor:'#525751',
    width:345,
    height:57,
    borderRadius:20,
    color:'#fff',
    fontSize:22,
    
  },
  buttonEntrar:{
    backgroundColor:'#ff0000',
    width:180,
    height:50,
    borderRadius:20,
    fontSize:22,
    textAlign:'center',
    padding:10,
    color:'#fff',
    marginVertical:55,
  }
});

  


