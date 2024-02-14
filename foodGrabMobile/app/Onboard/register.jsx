import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors';

const register = () => {

    const [showActive, setShowActiveColor] = useState()
  return (
    <SafeAreaView style={{flex : 1, backgroundColor : Colors.myRed}}>
      <View style={styles.container}>
        <View>
            <Text style={{fontFamily : 'Railway2', fontSize : 25}}>Get Started</Text>
            <Text style={{fontFamily : 'Railway1', fontSize : 15}}>Sign up today and start placing your order</Text>

            <View style={{
                display : 'flex', flexDirection :'row', 
                padding : 2, width : '100%', backgroundColor : Colors.myRed, 
                borderRadius : 10, marginTop : 20
            }}>
                <TouchableOpacity style={styles.active}>
                    <Text style={styles.activeColor}>Phone Number</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.inActive}>
                    <Text style={{fontSize : 15, fontFamily : 'Railway3'}}>Email Address</Text>
                </TouchableOpacity>
            </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default register

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        marginTop : 120, 
        borderTopEndRadius : 20,
        borderTopLeftRadius : 20,
        paddingTop : 30,
        paddingHorizontal : 30,
    },

    active : {
        backgroundColor : Colors.myRed,
        padding : 15,
        paddingHorizontal : 20,
        width : '50%',
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
        borderTopRightRadius : 8,
        borderBottomRightRadius : 8,
    },

    inActiveColor : {
        color : Colors.myGreen,
        fontSize : 15, fontFamily : 'Railway3'
    },
})