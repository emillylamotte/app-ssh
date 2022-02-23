import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Home({navigation}) {
 
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      
      <TouchableOpacity 
      style={styles.startButton}      
      onPress={ () => navigation.navigate('Login')}
      >
      <Text style={{color:'#fff', fontSize:22, textAlign:'center', marginTop:10}}> Começar</Text>
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
  logo: {
   width: 225,
   height:225,
   marginBottom: 180,
  },
  startButton: {
    backgroundColor:'#ff0000',
    width:180,
    height:50,
    borderRadius:20,
    textAlign:'center',
  },
});

  


