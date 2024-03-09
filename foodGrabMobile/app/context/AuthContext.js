import { StyleSheet, Text, View } from 'react-native'
import React, {createContext, useState} from 'react'



export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [userToken, setUserToken] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    const login = ()=>{
        setIsLoading(false)
        setUserToken('token123')
    }


    const logout = ()=>{    
        setIsLoading(false)
        setUserToken(null)
    }

  return (
    <AuthContext.Provider value={{login, logout, userToken}}>
        {children}
    </AuthContext.Provider>
  )
}



const styles = StyleSheet.create({})