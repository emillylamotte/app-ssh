import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Identificacao from './src/pages/Identificacao';
import Registro from './src/pages/Registro';
import InsercaoTemperatura from './src/pages/InsercaoTemperatura';
import InsercaoBatimentos from './src/pages/InsercaoBatimentos';
import InsercaoObservacoes from './src/pages/InsercaoObservacoes';
import InsercaoOximetria from './src/pages/InsercaoOximetria';
import InsercaoPressao from './src/pages/InsercaoPressao';
import Fim from './src/pages/Fim';
import Visualizacao from './src/pages/Visualizacao';

const Stack = createStackNavigator();

export default function App() {
 
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
      name="Home" 
      component={Home}
      options={{
        title:'SSH',
        headerStyle:{
          backgroundColor:'#FF0000',
        },
        headerTintColor: '#fff'
      }}
      />
      <Stack.Screen 
      name="Login" 
      component={Login} 
      options={{
        title:'Login de funcionário',
        headerStyle:{
          backgroundColor:'#FF0000',
        },
        headerTintColor: '#fff',
      }}
      />
      <Stack.Screen 
      name="Identificacao" 
      component={Identificacao}
      options={{
        title:'Identificação de paciente',
        headerStyle:{
          backgroundColor:'#FF0000',
        },
        headerTintColor: '#fff'
      }}
      />
      <Stack.Screen 
      name="Registro" 
      component={Registro}
      options={{
        title:'Inserção de dados',
        headerStyle:{
          backgroundColor:'#FF0000',
        },
        headerTintColor: '#fff'
      }}
      />
      <Stack.Screen 
      name="Visualizacao" 
      component={Visualizacao}
      options={{
        title:'Dados do paciente',
        headerStyle:{
          backgroundColor:'#FF0000',
        },
        headerTintColor: '#fff'
      }}
      />
      <Stack.Screen 
      name="InsercaoTemperatura" 
      component={InsercaoTemperatura}
      options={{
        title:'Temperatura',
        headerStyle:{
          backgroundColor:'#FF0000',
        },
        headerTintColor: '#fff'
      }}
      />
      <Stack.Screen 
      name="InsercaoBatimentos" 
      component={InsercaoBatimentos}
      options={{
        title:'Batimentos Cardíacos',
        headerStyle:{
          backgroundColor:'#FF0000',
        },
        headerTintColor: '#fff'
      }}
      />
      <Stack.Screen 
      name="InsercaoOximetria" 
      component={InsercaoOximetria}
      options={{
        title:'Oximetria',
        headerStyle:{
          backgroundColor:'#FF0000',
        },
        headerTintColor: '#fff'
      }}
      />
      <Stack.Screen 
      name="InsercaoPressao" 
      component={InsercaoPressao}
      options={{
        title:'Pressão arterial',
        headerStyle:{
          backgroundColor:'#FF0000',
        },
        headerTintColor: '#fff'
      }}
      />
       <Stack.Screen 
      name="InsercaoObservacoes" 
      component={InsercaoObservacoes}
      options={{
        title:'Observações',
        headerStyle:{
          backgroundColor:'#FF0000',
        },
        headerTintColor: '#fff'
      }}
      />
      <Stack.Screen 
      name="Fim" 
      component={Fim}
      options={{
        title:'Etapa concluída',
        headerStyle:{
          backgroundColor:'#FF0000',
        },
        headerTintColor: '#fff'
      }}
      />
     
    </Stack.Navigator>
   </NavigationContainer>

  );
}
  


