import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';

export default function InsercaoTemperatura({navigation}) {
 
  return (
    <View style={styles.container}>
     
        <Text style={styles.title}>Temperatura</Text>
        <TextInput style={styles.input}></TextInput>
        
        <View style={styles.viewButtons}>
          <TouchableOpacity style={styles.buttons} onPress={ () => navigation.navigate('Registro')}>  
              <Image source={require('../../../assets/pronto.png')} />
          </TouchableOpacity >
        </View>

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
  viewButtons:{
    flexDirection:'row', 
    marginVertical:55,
  },
  buttons: { 
    margin:47,
  },
});

  


