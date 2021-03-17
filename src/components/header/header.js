import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity, Alert } from 'react-native';
import {Header} from 'react-native-elements';

export default function HeaderComp(){




  const renderCustomIconA = () => {
    return(
      <TouchableOpacity onPress={() => {navigation.navigate('HomeScreen')}}>
        <Image
          style={{width: 50, height: 50,margin:20}}
          source={require('../../../assets/logo.png')}
         />
       </TouchableOpacity>
    );
  };

    return (
      
        <Header
           containerStyle={{
             backgroundColor:'#ffff'
           }}
          placement="left"
          leftComponent={() => renderCustomIconA()}
          centerComponent={{ text: 'Privacy Policy ', style: { color: '#A9A9A9',padding:40,paddingLeft:30} }}
          rightComponent={{ text: 'Contacts ', style: { color: '#A9A9A9',paddingTop:40,marginRight:20}}}
         
         
        
      />

        
      

    );
  
  
  

}