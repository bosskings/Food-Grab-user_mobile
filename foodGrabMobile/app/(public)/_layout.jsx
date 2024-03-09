import React from 'react'
import {Stack} from 'expo-router'

const _layout = () => {
  return (
    <Stack>

        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="wecomeOne" options={{ headerShown: false }} />
        <Stack.Screen name="welcomeTwo" options={{ headerShown: false }} />
        <Stack.Screen name="welcomeThree" options={{ headerShown: false }} />
        <Stack.Screen name="welcomeFour" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="OTPVerifcation" options={{
            headerTitle : '',
            headerLeft : ()=>(
            <Ionicons name='arrow-back' size={25} onPress={navigate.goBack}/>
            ),

            headerShadowVisible : false,
        }} />
        <Stack.Screen name="successfull" options={{ headerShown: false }} />
        <Stack.Screen name="address" options={{ 
            headerTitle : '',
            headerLeft : ()=>(
            <Ionicons name='arrow-back' size={25} onPress={navigate.goBack}/>
            ),

            headerShadowVisible : false,
        }} />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})