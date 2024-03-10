import { StyleSheet, Text, View } from 'react-native'
import React, {createContext, useState, useEffect} from 'react'
import {useNavigation} from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const navigate = useNavigation()

    const [userToken, setUserToken] = useState(null)


    const isLoggedIn = async() =>{
      try {
        let userToken = await AsyncStorage.getItem('token')
        setUserToken(userToken)
      } catch (error) {
        alert(error)
      }
    }

    useEffect(() =>{
      isLoggedIn()
    }, [])


  return (
    <AuthContext.Provider value={{userToken}}>
        {children}
    </AuthContext.Provider>
  )
}



const styles = StyleSheet.create({})