import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors';
import {Link} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

const OTPVerifcation = () => {
  const [isEmpty, setIsEmpty] = useState(null)

  const handleChange = (e) =>{
    // e.target.value 
    setIsEmpty(!isEmpty)
  }



  return (
    <SafeAreaView style={styles.container}>
        <View>
          <Text style={{fontFamily : 'Railway2', fontSize : 25}}>OTP Verification</Text>
          <Text style={{width : '98%', paddingTop : 10, fontFamily : 'Railway1'}}>
            Thank you for signing up, Enter the 4-digit that we 
            have sent via the phone number +234 728-1047-820
          </Text>

          <View style={styles.OTPDiv}>
              <TextInput style={isEmpty === null ? styles.inputDiv : styles.inputDiv2}
                value={isEmpty}
                onChange={handleChange}
              />

              <TextInput style={isEmpty === null ? styles.inputDiv : styles.inputDiv2}
                value={isEmpty}
                onChange={handleChange}
              />

              <TextInput style={isEmpty === null ? styles.inputDiv : styles.inputDiv2}
                value={isEmpty}
                onChange={handleChange}
              />

              <TextInput style={isEmpty === null ? styles.inputDiv : styles.inputDiv2}
                value={isEmpty}
                onChange={handleChange}
              />
          </View>
          

          <Text style={{textAlign : 'center', fontSize : 20, fontFamily : 'Railway3', paddingTop : 20}}>00:30</Text>

          <TouchableOpacity style={styles.btnContainer} onPress={() => {/* handle verification */}}>
            <Text style={styles.btnText}>Verify my account</Text>
          </TouchableOpacity>


          <Text style={{fontFamily : 'Railway1', paddingTop : 30, textAlign : 'center', fontSize : 15}}>Didn’t receive a code? 
          <Text style={{color : Colors.myRed, fontFamily : 'Railway3'}}>Resend code</Text></Text>
          <Link href={''}><Ionicons name='arrow-forward' size={20} style={{textAlign : 'center', paddingTop : 10}}/></Link>
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

  inputDiv2 : {
    borderColor : Colors.myRed,
    borderWidth : 1,
    width : '19%',
    height : 60,
    borderRadius : 10,
    padding : 10,
    textAlign : 'center',
    fontFamily : 'Railway2',  
    fontSize : 25,
    color : Colors.myRed
  },

  btnContainer: {
    height: 60,
    backgroundColor: Colors.myRed,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 40,
    width: '100%',
  },
  
  btnText: {
    fontFamily: 'Railway2',
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
})