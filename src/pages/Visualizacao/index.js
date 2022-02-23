import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Visualizacao({navigation, route}) {

  //const [carregando, setCarregando] = useState(true)
  //const [dados, setDados] = useState([])


    const paciente = route.params.patient;
    const temperatura = route.params.patient.temp;
    const batimentos = route.params.patient.bpm;
    const oximetria = route.params.patient.oxi;
    const pressaoArterial = route.params.patient.pressao;
    const observacao = route.params.patient.obs;

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
     <Text style={styles.data}>{temperatura}°C</Text> 

     <Text style={styles.title}>Batimentos Cardíacos</Text>
     <Text style={styles.data}>{batimentos}bpm</Text> 

     <Text style={styles.title}>Oximetria</Text>
     <Text style={styles.data}> {oximetria}%</Text> 
     
     <Text style={styles.title}>Pressão Arterial</Text>
     <Text style={styles.data}>{pressaoArterial}</Text> 
    
     <Text style={styles.title}>Observações</Text>
     <Text style={styles.data}> {observacao}</Text> 

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

  


