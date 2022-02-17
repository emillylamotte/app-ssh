import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';

export default function Visualizacao({navigation}) {
 
  return (
    <View style={styles.container}>
     
     <Text style={styles.name}>Emilly Gomes Lamotte</Text>

     <Text style={styles.title}>Temperatura</Text>
     <Text style={styles.data}> 37º </Text> 

     <Text style={styles.title}>Batimentos Cardíacos</Text>
     <Text style={styles.data}> 74 </Text> 

     <Text style={styles.title}>Oximetria</Text>
     <Text style={styles.data}> 93% </Text> 
     
     <Text style={styles.title}>Pressão Arterial</Text>
     <Text style={styles.data}> 12.3 </Text> 
    
     <Text style={styles.title}>Observações</Text>
     <Text style={styles.data}> Alguma informação complementar sobre o atendimento que foi realizado </Text> 
    
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
  name:{
    color:'#fff',
    fontSize:24,
    backgroundColor:'#525751',
    textAlign:'center',
    textAlignVertical:'center',
    padding:10,
    marginBottom:15,
  },
  data:{
    backgroundColor:'#525751',
    width:345,
    minHeight:45,
    borderRadius:20,
    marginVertical:15,
    color:'#fff',
    fontSize:18,
    textAlign:'center',
    textAlignVertical:'center',
    padding: 5,
  },
  title:{
    color:'#fff',
    fontSize:22,
    textAlign:'center',
    textAlignVertical:'center',
    padding:10,
  },
});

  


