import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState, useEffect } from 'react'
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect } from 'expo-router';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [hasSeenWelcomeScreen, setHasSeenWelcomeScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isLoggedIn = async () => {
    try {
      let userToken = (await AsyncStorage.getItem('token') ? JSON.parse(await AsyncStorage.getItem('token')) : null);
      setUserToken(userToken);
      setIsLoading(false);
    } catch (error) {
      alert(error);
    }
  };
  
  alert(userToken)



  const handleContinue = async () => {
    await AsyncStorage.setItem('hasSeenWelcomeScreen', 'true');
    router.push('public/welcomeTwo');
  };

  const checkWelcomeStatus = async () => {
    const storedValue = await AsyncStorage.getItem('hasSeenWelcomeScreen');
    setHasSeenWelcomeScreen(storedValue === 'true');
  };

  useEffect(() => {
    if (userToken !== null ) {
      router.replace('(tabs)');
    } else if (userToken === null) {
      router.replace('public/login');
    } else {
      setIsLoading(true);
    }
  }, [userToken]);

  const logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem('token');
    router.replace('public/login');
  };

  return (
    <AuthContext.Provider value={{ userToken, logout, isLoggedIn, handleContinue, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

