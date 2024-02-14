import Checkbox from 'expo-checkbox';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors';

const register = () => {

    const [showActive, setShowActiveColor] = useState(false)
    const [showInActive, setShowInActiveColor] = useState(true)

    const [isChecked, setChecked] = useState(false);

    const showFunc = () =>{
        setShowActiveColor(true)
        setShowInActiveColor (false)
    }


    const hideFunc = () =>{
        setShowActiveColor(false)
        setShowInActiveColor (true)
    }


  return (
    <SafeAreaView style={{flex : 1, backgroundColor : Colors.myRed}}>
      <View style={styles.container}>
        <ScrollView >
            <Text style={{fontFamily : 'Railway2', fontSize : 25}}>Get Started</Text>
            <Text style={{fontFamily : 'Railway1', fontSize : 15}}>Sign up today and start placing your order</Text>

            <View style={{
                display : 'flex', flexDirection :'row', 
                padding : 1, width : '100%', backgroundColor : Colors.myRed, 
                borderRadius : 5, marginTop : 15
            }}>
                <TouchableOpacity style={showInActive ? styles.active : styles.inActive} onPress={showFunc}>
                    <Text style={showInActive ? styles.activeColor : styles.inActiveColor}>Phone Number</Text>
                </TouchableOpacity>

                <TouchableOpacity style={showActive ? styles.active : styles.inActive} onPress={hideFunc}>
                    <Text style={showActive ? styles.activeColor : styles.inActiveColor}>Email Address</Text>
                </TouchableOpacity>
            </View>

            { 
                showActive ? 
                    <View style={{paddingTop : 0}}>
                        <View style={styles.inputDiv}>
                            <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 15}}>Full Name</Text>
                            <TextInput placeholder='Your name : ' style={styles.inputStyles}/>
                        </View>

                        <View style={styles.inputDiv}>
                            <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 15}}>Phone Number</Text>
                            <TextInput placeholder='Phone Number : ' style={styles.inputStyles}/>
                        </View>

                        <View style={styles.inputDiv}>
                            <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 15}}>Password</Text>
                            <TextInput placeholder='Password : ' style={styles.inputStyles}/>
                        </View>

                        <View style={styles.inputDiv}>
                            <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 15}}>Confirm Password</Text>
                            <TextInput placeholder='Confirm Password : ' style={styles.inputStyles}/>
                        </View>
                    </View> 
                
                : 

                    <View style={{paddingTop : 0}}>
                    <View style={styles.inputDiv}>
                        <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 15}}>Full Name</Text>
                        <TextInput placeholder='Your name : ' style={styles.inputStyles}/>
                    </View>

                    <View style={styles.inputDiv}>
                        <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 15}}>Email address</Text>
                        <TextInput placeholder='Email address : ' style={styles.inputStyles}/>
                    </View>

                    <View style={styles.inputDiv}>
                        <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 15}}>Password</Text>
                        <TextInput placeholder='Password: ' style={styles.inputStyles}/>
                    </View>

                    <View style={styles.inputDiv}>
                        <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 15}}>Confirm Password</Text>
                        <TextInput placeholder='Confirm Password : ' style={styles.inputStyles}/>
                    </View>
                    </View>
            }



            <View style={{display : 'flex', flexDirection : 'row', gap : 5, paddingTop : 10, alignItems : 'center'}}>
                <Checkbox style={{borderColor : Colors.myRed}} value={isChecked} onValueChange={setChecked} color={isChecked && Colors.myRed}/>
                <Text style={{width : '90%', fontSize : 15, fontFamily : 'Railway1'}}>
                    If you are creating a new account, 
                    <Text style={{color : Colors.myRed}}>Terms & Conditions</Text> 
                    and  <Text style={{color : Colors.myRed}}>Privacy Policy</Text> will apply
                </Text>
            </View>

            <TouchableOpacity style={styles.btnStyles}>
                <Text style={{fontSize : 15, fontFamily : 'Railway2', color : 'white'}}>Get Started</Text>
            </TouchableOpacity>

            <Text style={{textAlign : 'center', paddingTop : 10, fontSize : 15, fontFamily : 'Railway3',}}>Have an account? <Text style={{color : Colors.myRed}}>Login</Text></Text>
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default register

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        marginTop : 90, 
        borderTopEndRadius : 20,
        borderTopLeftRadius : 20,
        paddingTop : 20,
        paddingHorizontal : 30,
    },

    active : {
        backgroundColor : Colors.myRed,
        padding : 15,
        paddingHorizontal : 20,
        width : '50%',
        borderRadius : 5
    },

    activeColor : {
        color : 'white',
        fontSize : 15, fontFamily : 'Railway3'
    },

    inActive : {
        backgroundColor : 'white',
        padding : 15,
        paddingHorizontal : 20,
        width : '50%',
        borderRadius : 5
    },

    inActiveColor : {
        color : Colors.myGreen,
        fontSize : 15, fontFamily : 'Railway3'
    },

    inputDiv : {
        paddingTop : 15,
    },

    inputStyles : {
        padding : 10,
        borderColor : Colors.myGray,
        borderWidth : 1,
        borderRadius : 5,
        fontSize : 15
    },

    btnStyles :{
        height : 50,
        backgroundColor : Colors.myRed,
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 20,
        justifyContent : 'center',
        borderRadius : 10,  
        marginTop : 15,
      }
})