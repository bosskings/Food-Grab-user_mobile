import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useNavigation } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Text } from '@/components/Themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useColorScheme } from '@/components/useColorScheme';
import { StatusBar } from 'expo-status-bar';
import { View } from '@/components/Themed';

import {AuthProvider} from './context/AuthContext'



SplashScreen.preventAutoHideAsync();

const RootLayoutNav = () => {

  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Railway1: require('../assets/fonts/Raleway-Regular.ttf'),
    Railway2: require('../assets/fonts/Raleway-Bold.ttf'),
    Railway3: require('../assets/fonts/Raleway-SemiBold.ttf'),
    ...FontAwesome.font,

  });

  return (

    <AuthProvider>
    
    <Stack>
        {/* <Stack.Screen name="homeDash/homeDash" options={{ headerShown: false }} /> */}
      <Stack.Screen name="Onboard/login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="welcomes/wecomeOne" options={{ headerShown: false }} />
      <Stack.Screen name="resturantDetails/orderPage" options={{ 
        headerTitle : '',
        headerLeft : ()=>(
          <Ionicons name='arrow-back' size={25} onPress={navigate.goBack}/>
          ),
          
          headerShadowVisible : false,
      }} />

      <Stack.Screen name="resturantDetails/resturantPage" options={{
      headerTitle : '',
      headerLeft : ()=>(
        <Ionicons name='arrow-back' size={25} onPress={navigate.goBack}/>
        ),
        
        headerShadowVisible : false,
      }} />
      {/* ================ WELCOME SCREEN ============================= */}

      <Stack.Screen name="welcomes/welcomeTwo" options={{ headerShown: false }} />
      <Stack.Screen name="welcomes/welcomeThree" options={{ headerShown: false }} />
      <Stack.Screen name="welcomes/welcomeFour" options={{ headerShown: false }} />

      {/* ===================== ONBOARD ================================ */}
      <Stack.Screen name="Onboard/register" options={{ headerShown: false }} />
      <Stack.Screen name="Onboard/OTPVerifcation" options={{
        headerTitle : '',
        headerLeft : ()=>(
          <Ionicons name='arrow-back' size={25} onPress={navigate.goBack}/>
        ),

        headerShadowVisible : false,
      }} />
      <Stack.Screen name="Onboard/successfull" options={{ headerShown: false }} />
      <Stack.Screen name="Onboard/address" options={{ 
        headerTitle : '',
        headerLeft : ()=>(
          <Ionicons name='arrow-back' size={25} onPress={navigate.goBack}/>
        ),

        headerShadowVisible : false,
      }} />

      {/* ======================= LOGIN ===================================== */}
      {/* <Stack.Screen name="Onboard/login" options={{ headerShown: false }} /> */}

      {/* ======================= DASHBOARD COMPONENTS ================================== */}

    </Stack>
    </AuthProvider>
  );
}
