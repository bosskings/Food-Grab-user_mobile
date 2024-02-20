import Checkbox from 'expo-checkbox';
import { StyleSheet, Text, View,  TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
const register = () => {

    const [showActive, setShowActiveColor] = useState(false)
    const [showInActive, setShowInActiveColor] = useState(true)

    const [isChecked, setChecked] = useState(false);

    const [password, setPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    const [password1, setPassword1] = useState(false);
    const [showPassword1, setShowPassword1] = useState('');


    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };

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
            <Text style={{fontFamily : 'Railway2', fontSize : 25}}>Login</Text>
            <Text style={{fontFamily : 'Railway1', fontSize : 15}}>Welcome back, login to place your order today</Text>

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
                            <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 15}}>Phone Number</Text>
                            <TextInput placeholder='Phone Number : ' style={styles.inputStyles}/>
                        </View>

                        <View style={styles.inputDiv}>
                            <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 15}}>Password</Text>
                            <View>
                                <TextInput placeholder='Password:' 
                                    style={styles.inputStyles}
                                    secureTextEntry={!showPassword}
                                    value={ password}
                                />

                                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconStyle}>
                                    {showPassword ? 
                                        <Ionicons name='eye-off' size={20}/>
                                        :
                                        <Ionicons name='eye' size={20} /> 
                                    }
                                </TouchableOpacity>
                                
                            </View>
                        </View>

                    </View> 
                
                : 

                    <View style={{paddingTop : 0}}>

                    <View style={styles.inputDiv}>
                        <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 15}}>Email address</Text>
                        <TextInput placeholder='Email address : ' style={styles.inputStyles}/>
                    </View>

                    <View style={styles.inputDiv}>
                        <Text style={{fontFamily : 'Railway3', paddingBottom : 10, fontSize : 15}}>Password</Text>
                        <View>
                            <TextInput placeholder='Password:' 
                                style={styles.inputStyles}
                                secureTextEntry={!showPassword}
                                value={ password}
                            />

                            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconStyle}>
                                {showPassword ? 
                                    <Ionicons name='eye-off' size={20}/>
                                    :
                                    <Ionicons name='eye' size={20} /> 
                                }
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                    </View>
            }

            <Link href={'Onboard/OTPVerifcation'} asChild>
            <TouchableOpacity style={styles.btnStyles}>
                <Text style={{fontSize : 15, fontFamily : 'Railway2', color : 'white'}}>Get Started</Text>
            </TouchableOpacity>
            </Link>

            <Text style={{textAlign : 'center', paddingTop : 10, fontSize : 15, fontFamily : 'Railway3',}}>
                Don’t have an account? 
                <Link href={'Onboard/register'}><Text style={{color : Colors.myRed}}>Sign up</Text></Link>
            </Text>
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
        paddingHorizontal : 20,
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
        paddingTop : 20,
        
    },

    inputStyles : {
        padding : 10,
        borderColor : Colors.myGray,
        borderWidth : 1,
        borderRadius : 5,
        fontSize : 15,
        position : 'relative'
    },

    btnStyles :{
        height : 50,
        backgroundColor : Colors.myRed,
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 20,
        justifyContent : 'center',
        borderRadius : 10,  
        marginTop : 40,
    },

    iconStyle : {
        position : 'absolute',
        top : 15,
        right : 30,
    }
})