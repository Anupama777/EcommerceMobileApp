import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createAppContainer}  from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack'
import {HeaderComp,HomeScreen} from './src/components/header/header';
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }


const Stack = createStackNavigator();

export default function App() {

 

  return (
    <NavigationContainer>
      <Stack.Navigator>
       
          <>

            <Stack.Screen name=" " component={HeaderComp}/>
            <Stack.Screen name=" " component={HomeScreen}/>

           
            
           
          </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}