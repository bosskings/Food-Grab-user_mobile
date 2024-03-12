import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState, useEffect } from 'react'
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext();

// ... (your imports)

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [hasSeenWelcomeScreen, setHasSeenWelcomeScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isLoggedIn = async () => {
    try {
      let userToken = await AsyncStorage.getItem('token');
      setUserToken(userToken);
      setIsLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  const handleContinue = async () => {
    await AsyncStorage.setItem('hasSeenWelcomeScreen', 'true');
    router.push('public/welcomeTwo');
  };

  const checkWelcomeStatus = async () => {
    const storedValue = await AsyncStorage.getItem('hasSeenWelcomeScreen');
    setHasSeenWelcomeScreen(storedValue === 'true');
  };

  React.useEffect(() => {
    const checkLoginStatus = async () => {
      await isLoggedIn();
      await checkWelcomeStatus();
  
      if (userToken !== null && hasSeenWelcomeScreen) {
        router.replace('(tabs)');

      // } else if (!userToken && !hasSeenWelcomeScreen) {
      //   router.replace('public/wecomeOne');
      
      } if (userToken === null && hasSeenWelcomeScreen) {
        router.replace('public/login');
      }
  
    };
  
    checkLoginStatus();
  }, [userToken, hasSeenWelcomeScreen]);

  const logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem('token');
    router.replace('public/welcomeOne');
  };

  return (
    <AuthContext.Provider value={{ userToken, logout, isLoggedIn, handleContinue, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({});
