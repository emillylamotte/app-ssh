import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Identificacao({ navigation }) {

  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paciente</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => {
          setUsername(text);
        }} 
        />
        <View>
          <TouchableOpacity style={styles.buttons} onPress={() => {navigation.navigate('Registro', {patient:username});}}>
            <Image source={require('../../../assets/inserir.png')} />
          </TouchableOpacity >
          <TouchableOpacity style={styles.buttons} onPress={ () => navigation.navigate('Visualizacao')}>  
            <Image source={require('../../../assets/pesquisar.png')} />
          </TouchableOpacity >
        </View>
    </View>

    
  );
}


//   return (
//     <View style={styles.container}>

//         <Text style={styles.title}>Paciente</Text>
//         <TextInput style={styles.input} onChangeText={onChangeText} value={text}></TextInput>

//         <View style={styles.viewButtons}>
//           <TouchableOpacity style={styles.buttons} onPress={ () => navigation.navigate('Registro')}>  
//               <Image source={require('../../../assets/inserir.png')} />
//           </TouchableOpacity >
//           <TouchableOpacity style={styles.buttons} onPress={ () => navigation.navigate('Visualizacao')}>  
//               <Image source={require('../../../assets/pesquisar.png')} />
//           </TouchableOpacity >
//         </View>

//     </View>
//   );
//  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    marginVertical: 15,
    fontSize: 24,
  },
  input: {
    backgroundColor: '#525751',
    width: 345,
    height: 57,
    borderRadius: 20,
    color: '#fff',
    fontSize: 22,
  },
  viewButtons: {
    flexDirection: 'row',
    marginVertical: 55,
  },
  buttons: {
    margin: 47,
    backgroundColor:'red',
  },
});




