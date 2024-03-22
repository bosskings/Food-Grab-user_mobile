import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { createContext, useState, useEffect } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [hasSeenWelcomeScreen, setHasSeenWelcomeScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({});

  const user = async () => {
    setUserData(await AsyncStorage.getItem("data"));
  };

  const isLoggedIn = async () => {
    try {
      let userToken = await AsyncStorage.getItem("token");
      setUserToken(userToken);
      setIsLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  const handleContinue = async () => {
    await AsyncStorage.setItem("hasSeenWelcomeScreen", "true");
    router.push("public/welcomeTwo");
  };

  const checkWelcomeStatus = async () => {
    const storedValue = await AsyncStorage.getItem("hasSeenWelcomeScreen");
    setHasSeenWelcomeScreen(storedValue === "true");
  };

  React.useEffect(() => {
    const checkLoginStatus = async () => {
      await isLoggedIn();
      await checkWelcomeStatus();

      if (userToken !== null && hasSeenWelcomeScreen) {
        router.replace("(tabs)");
        // router.replace('auth/proceed_checkout');
        // router.replace('auth/order_summary');
        // router.replace('auth/prefered_payment');
        // router.replace('auth/order_status');

        // } else if (!userToken && !hasSeenWelcomeScreen) {
        //   router.replace('public/wecomeOne');
      }
      if (userToken === null && hasSeenWelcomeScreen) {
        router.replace("public/login");
      } else {
        setIsLoading(true);
      }
    };
    user();
    checkLoginStatus();
  }, [userToken, hasSeenWelcomeScreen]);

  const logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem("token");
    router.replace("public/welcomeOne");
  };

  return (
    <AuthContext.Provider
      value={{
        userToken,
        logout,
        isLoggedIn,
        handleContinue,
        isLoading,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({});
