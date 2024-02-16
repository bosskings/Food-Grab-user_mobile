import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const address = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={{fontFamily : 'Railway2', fontSize : 25}}>Your Address</Text>
            <Text style={{fontFamily : 'Railway1', fontSize : 15, paddingVertical : 20}}>We use your address to help you find the best restaurants nearby.</Text>
            

            <View style={{position : 'relative'}}>
                <TextInput placeholder='Search for an address' style={styles.inputStyles}/>
                <Ionicons size={20} name='search' style={{position : 'absolute', left : 20, top : 20}}/>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default address

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        flex : 1,
        paddingHorizontal : 20,
        paddingVertical : 20,
    },

    inputStyles : {
        padding : 15,
        paddingLeft : 50,
        borderColor : Colors.myGray,
        borderWidth : 1,
        borderRadius : 5,
        fontSize : 15,
        position : 'relative'
    },
})