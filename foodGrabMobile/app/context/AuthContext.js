import { StyleSheet, Text, View } from 'react-native'
import React, {createContext, useState} from 'react'
import {useNavigation} from 'expo-router'


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const navigate = useNavigation()

    const [userToken, setUserToken] = useState('token123')
    const [isLoading, setIsLoading] = useState(true)

  // alert(userToken)

    const loginFun = ()=>{
        setUserToken('token123')
    }


    const logoutFun = ()=>{    
        setUserToken(null)
    }

  return (
    <AuthContext.Provider value={{loginFun, logoutFun, userToken}}>
        {children}
    </AuthContext.Provider>
  )
}



const styles = StyleSheet.create({})