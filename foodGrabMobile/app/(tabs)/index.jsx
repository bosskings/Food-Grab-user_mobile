import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import DashHeader from '../../components/DashHeader';
import { Link } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
        <DashHeader />

        <View style={{position : 'relative'}}>
          <Ionicons name='search' size={15} style={{position : 'absolute', top : 20, left : 20}}/>
          <TextInput placeholder='Search for your favourite food' style={styles.inputStyles}/>
          <Ionicons name='filter' size={15} style={{position : 'absolute', top : 20, right : 20}}/>
        </View>

        <View>
            <View style={{paddingVertical : 10, paddingBottom : 0}}>
              <Image source={require('../../assets/images/dashSec1.png')}
                style={styles.imageDIv}
              />
            </View>



        </View>
    </SafeAreaView>

  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : 'white',
        paddingTop :50,
        paddingHorizontal: 20
    },

    imageDIv : {
      width : '100%',
      height : 120
    },

    inputStyles : {
      padding : 10,
      borderColor : Colors.myGray,
      borderWidth : 1,
      borderRadius : 5,
      fontSize : 15,
      position : 'relative',
      paddingLeft : 40
  },

})