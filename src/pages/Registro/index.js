import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Identificacao({navigation}) {

  const paciente = route.params.patient; //recebe o nome do paciente

  //variaveis patra alterar dados do paciente
  const [temp, setTemp] = useState('');
  const [bpm, setBpm] = useState('');
  const [oxi, setOxi] = useState('');
  const [pressao, setPressao] = useState('');
  const [obs, setObs] = useState('');
 
  return (
    <View style={styles.container}>

      <Text>{paciente}</Text>

      <TextInput
          style={styles.input}
          value={temp}
          onChangeText={(temp_value) => {
            setTemp(temp_value);
            console.log(temp)
          }} 
      />
      <TextInput
          style={styles.input}
          value={bpm}
          onChangeText={(bpm_value) => {
            setBpm(bpm_value);
          }} 
      />
      <TextInput
          style={styles.input}
          value={oxi}
          onChangeText={(oxi_value) => {
            setOxi(oxi_value);
          }} 
      />
      <TextInput
          style={styles.input}
          value={pressao}
          onChangeText={(pressao_value) => {
            setPressao(pressao_value);
          }} 
      />
      <TextInput
          style={styles.input}
          value={obs}
          onChangeText={(obs_value) => {
            setObs(obs_value);
          }}
       />
        
     <TouchableOpacity style={styles.buttons} onPress={ 
        () => {
          navigation.navigate('Visualizacao', {patient:username,temp,oxi,bpm,pressao,obs});
       }}
      >
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
  input: {
    backgroundColor: '#525751',
    width: 345,
    height: 57,
    borderRadius: 20,
    color: '#fff',
    fontSize: 22,
  },
  buttons: {
    margin: 47,
    backgroundColor:'red',
  },
});

  


