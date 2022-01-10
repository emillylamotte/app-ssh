import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';

export default function Identificacao({navigation}) {
 
  return (
    <View style={styles.container}>
     
     <TouchableOpacity 
        style={styles.optionsButton}      
        onPress={ () => navigation.navigate('InsercaoTemperatura')}
     >
        <Text style={styles.buttonOptions}>Temperatura</Text>
     </TouchableOpacity> 
     <TouchableOpacity 
        style={styles.optionsButton}      
        onPress={ () => navigation.navigate('InsercaoBatimentos')}
     >
        <Text style={styles.buttonOptions}>Batimentos Cardíacos</Text>
     </TouchableOpacity> 
     <TouchableOpacity 
        style={styles.optionsButton}      
        onPress={ () => navigation.navigate('InsercaoOximetria')}
      >
        <Text style={styles.buttonOptions}>Oximetria</Text>
     </TouchableOpacity> 
     <TouchableOpacity 
        style={styles.optionsButton}      
        onPress={ () => navigation.navigate('InsercaoPressao')}
      >
        <Text style={styles.buttonOptions}>Pressão Arterial</Text>
     </TouchableOpacity> 
     <TouchableOpacity 
        style={styles.optionsButton}      
        onPress={ () => navigation.navigate('InsercaoObservacoes')}
      >
        <Text style={styles.buttonOptions}>Observações</Text>
     </TouchableOpacity>  
     
     <TouchableOpacity style={styles.buttons} onPress={ () => navigation.navigate('Fim')}>  
        <Image source={require('../../../assets/pronto.png')} />
      </TouchableOpacity >
    
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
  optionsButton:{
    backgroundColor:'#525751',
    width:345,
    height:57,
    borderRadius:20,
    marginVertical:25,
  },
  buttonOptions:{
    color:'#fff',
    fontSize:22,
    textAlign:'center',
    textAlignVertical:'center',
    padding:10,
  },
});

  


