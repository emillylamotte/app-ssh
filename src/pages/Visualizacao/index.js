import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Visualizacao({navigation, route}) {

  const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState([])
    const paciente = route.params.patient;

    // useEffect(
    //     () => {
    //         fetch('https://raw.githubusercontent.com/PedroCorcaque/flaskapp-mongodb-aic-iii/master/teste.json')
    //             .then((resp) => resp.json())
    //             .then((json) => (setDados(json.data[0])))
    //             .catch(() => (alert('Erro ao carregar os dados')))
    //             .finally(() => setCarregando(false))
    //     }, [])
 
  return (
    <View style={styles.container}>
     
     <Text style={styles.name}>{paciente}</Text>

     <Text style={styles.title}>Temperatura</Text>
     <Text style={styles.data}> 29°C</Text> 

     <Text style={styles.title}>Batimentos Cardíacos</Text>
     <Text style={styles.data}>100bpm</Text> 

     <Text style={styles.title}>Oximetria</Text>
     <Text style={styles.data}> 98% </Text> 
     
     <Text style={styles.title}>Pressão Arterial</Text>
     <Text style={styles.data}> 12.8</Text> 
    
     <Text style={styles.title}>Observações</Text>
     <Text style={styles.data}> Com fortes dores de cabeça </Text> 

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

  


