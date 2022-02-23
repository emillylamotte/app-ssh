import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';

export default function Fim({navigation}) {
 
  return (
    <View style={styles.container}>
     
        <Text style={styles.title}>Fim da operação. Todos os registros foram salvos com sucesso!</Text>
        
        <View style={styles.viewButtons}>
          <TouchableOpacity style={styles.buttons} onPress={ () => navigation.navigate('Identificacao')}>  
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
    backgroundColor:'#525751',
    width:345,
    height:100,
    borderRadius:20,
    color:'#fff',
    fontSize:22,
    textAlign:'center',
    padding:20,
  },
  viewButtons:{
    flexDirection:'row', 
    marginVertical:55,
  },
  buttons: { 
    margin:47,
  },
});

  


