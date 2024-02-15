import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';

const OTPVerifcation = () => {
  return (

    <SafeAreaView style={styles.container}>
        <View>
          <Text style={{fontFamily : 'Railway2', fontSize : 25}}>OTP Verification</Text>
          <Text style={{width : '98%', paddingTop : 10, fontFamily : 'Railway1'}}>
            Thank you for signing up, Enter the 4-digit that we 
            have sent via the phone number +234 728-1047-820
          </Text>

          <View style={styles.OTPDiv}>
            <TextInput style={styles.inputDiv}/>
            <TextInput style={styles.inputDiv}/>
            <TextInput style={styles.inputDiv}/>
            <TextInput style={styles.inputDiv}/>
          </View>
          
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={{    fontFamily : 'Railway2', fontSize : 15, color : 'white'}}>Verify my account</Text>
          </TouchableOpacity>

          <Text>Didn’t receive a code? <Text>Resend code</Text></Text>
        </View>
    </SafeAreaView>
  )
}

export default OTPVerifcation

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'white',
    paddingHorizontal :20,
    paddingTop : 30,
  },

  OTPDiv : {
    display : 'flex', 
    flexDirection : 'row',
    gap : 30,
    justifyContent : 'center',
    paddingTop : 20
  },

  inputDiv : {
    borderColor : Colors.myGray,
    borderWidth : 1,
    width : '19%',
    height : 60,
    borderRadius : 10,
    padding : 10,
    textAlign : 'center',
    fontFamily : 'Railway2',  
    fontSize : 25
  },

  btnStyle : {
    height : 60,
    backgroundColor : Colors.myRed,
    flexDirection : 'row',
    alignItems : 'center',
    paddingHorizontal : 20,
    justifyContent : 'center',
    borderRadius : 10,  
    marginTop : 40,
  }
})