import React, { createContext, useState, useEffect } from 'react';
// import { useNavigation } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigation();
  const [userToken, setUserToken] = useState(null);
  const [hasSeenWelcomeScreen, setHasSeenWelcomeScreen] = useState(false);

  const isLoggedIn = async () => {
    try {
      let storedToken = await AsyncStorage.getItem('token');
      setUserToken(storedToken);
    } catch (error) {
      console.error(error);
    }
  };

  const handleContinue = async () => {
    await AsyncStorage.setItem('hasSeenWelcomeScreen', 'true');
    navigate.navigate('public/welcomeTwo');
  };

  const checkWelcomeStatus = async () => {
    const storedValue = await AsyncStorage.getItem('hasSeenWelcomeScreen');
    setHasSeenWelcomeScreen(storedValue === 'true');
  };

  React.useEffect(() => {
    const checkLoginStatus = async () => {
      await isLoggedIn();
      await checkWelcomeStatus();

      if (userToken !== null && hasSeenWelcomeScreen === true) {
        navigate.navigate('(tabs)'); // Replace '(tabs)' with the actual route name
      } else if (userToken === null && hasSeenWelcomeScreen === false) {
        navigate.navigate('public/wecomeOne');
      } else if (userToken === null && hasSeenWelcomeScreen === true) {
        navigate.navigate('public/login');
      }
    };

    checkLoginStatus();
  }, [userToken, hasSeenWelcomeScreen, navigate]);

  const logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem('token');
    navigate.navigate('public/wecomeOne');
  };

  return (
    <AuthContext.Provider value={{ userToken, logout, isLoggedIn, handleContinue }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
