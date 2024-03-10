import { StyleSheet, Text, View } from 'react-native'
import React, {createContext, useState} from 'react'



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [userToken, setUserToken] = useState('token123')
    const [isLoading, setIsLoading] = useState(true)


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