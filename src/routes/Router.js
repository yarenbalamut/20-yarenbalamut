import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

const Router = () => {



  return (

        <Stack.Navigator initialRouteName="LoginScreen">
           <Stack.Screen 
            name="LoginScreen" 
            component={LoginScreen} 
            options={({ navigation }) => ({            
                headerShown: false            
            })}
        />  
        <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={({ navigation }) => ({
            headerTitle: "Anasayfa",
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            
            })}
        />
        </Stack.Navigator>


  )
}

export default Router

const styles = StyleSheet.create({})