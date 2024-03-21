import FontAwesome from '@expo/vector-icons/FontAwesome';
import { isLoading, useFonts } from 'expo-font';
import { Stack, useNavigation } from 'expo-router';
import {AuthContext, AuthProvider} from './context/AuthContext'
import { useContext, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ErrorBoundary } from 'expo-router';
import { Text, ActivityIndicator } from 'react-native'






// export const unstable_settings = {
//   initialRouteName: '(tabs)',
// };

export {
  ErrorBoundary,
} from 'expo-router';



export default function RootLayout() {

  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Railway1: require('../assets/fonts/Raleway-Regular.ttf'),
    Railway2: require('../assets/fonts/Raleway-Bold.ttf'),
    Railway3: require('../assets/fonts/Raleway-SemiBold.ttf'),
    ...FontAwesome.font,

  });


  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );

}

const RootLayoutNav = () => {
  const {isLoading} = useContext(AuthContext)

  {isLoading && <ActivityIndicator size={'large'}/>}
  
  const navigate = useNavigation()

  return (

        <Stack>

          {/* ================ PRIVATE SCREENS =========================== */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="homeDash" options={{ headerShown: false }} /> */}
          <Stack.Screen name="auth/orderPage" options={{ 
              headerTitle : '',
              headerLeft : ()=>(
                  <Ionicons name='arrow-back' size={25} onPress={navigate.goBack}/>
                  ),
                  
                  headerShadowVisible : false,
          }} />
          <Stack.Screen name="auth/resturantPage" options={{
              headerTitle : '',
              headerLeft : ()=>(
              <Ionicons name='arrow-back' size={25} onPress={navigate.goBack}/>
              ),
              
              headerShadowVisible : false,
          }} /> 

          <Stack.Screen name="auth/proceed_checkout" options={{
              headerTitle : '',
              headerLeft : ()=>(
              <Ionicons name='arrow-back' size={25} onPress={navigate.goBack}/>
              ),
              
              headerShadowVisible : false,
          }} /> 

          <Stack.Screen name="auth/order_summary" options={{
              headerTitle : '',
              headerLeft : ()=>(
              <Ionicons name='arrow-back' size={25} onPress={navigate.goBack}/>
              ),
              
              headerShadowVisible : false,
          }} /> 


          <Stack.Screen name="auth/prefered_payment" options={{
              headerTitle : '',
              headerLeft : ()=>(
              <Ionicons name='arrow-back' size={25} onPress={navigate.goBack}/>
              ),
              
              headerShadowVisible : false,
          }} /> 

          <Stack.Screen name="auth/order_status" options={{headerShown : false}} /> 




          {/* =========== PUBLIC SCREENS ======================= */}
          <Stack.Screen name="public/login" options={{ headerShown: false }} />
          <Stack.Screen name="public/register" options={{ headerShown: false }} />
          <Stack.Screen name="public/wecomeOne" options={{ headerShown: false }} />
          <Stack.Screen name="public/welcomeTwo" options={{ headerShown: false }} />
          <Stack.Screen name="public/welcomeThree" options={{ headerShown: false }} />
          <Stack.Screen name="public/welcomeFour" options={{ headerShown: false }} />
          <Stack.Screen name="public/OTPVerifcation" options={{
              headerTitle : '',
              headerLeft : ()=>(
              <Ionicons name='arrow-back' size={25} onPress={navigate.goBack}/>
              ),

              headerShadowVisible : false,
          }} />
          <Stack.Screen name="public/successfull" options={{ headerShown: false }} />
          <Stack.Screen name="public/address" options={{ 
              headerTitle : '',
              headerLeft : ()=>(
              <Ionicons name='arrow-back' size={25} onPress={navigate.goBack}/>
              ),

              headerShadowVisible : false,
          }} />


        </Stack>
  )
}
