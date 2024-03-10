import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';

const wecomeOne = () => {
  return (
    <SafeAreaView style={{flex : 1, backgroundColor :'gray'}}>
      <View style={styles.container}>
        <Image source={require('../../assets/images/pana.png')} style={styles.imgStyle}/>

        {/* ========= Text =============== */}
        <View style={styles.textDiv}>

          <Text style={{fontSize : 25, fontFamily : 'Railway2', textAlign : 'center'}}>Explore restaurant nearby</Text>

          <Text style={{textAlign : 'center', lineHeight : 22, paddingVertical : 10, fontSize : 15}}>
            By granting permission, you can search for restaurants around you and receive more accurate delivery
          </Text>
        </View>

        
        <Link href={'welcomes/welcomeTwo'} asChild>        
          <TouchableOpacity style={styles.btnStyles}>
              <Text style={{fontSize : 18, color : 'white', fontFamily : 'Railway2'}}>Grant Permission</Text>
            </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default wecomeOne

const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : 20,
        backgroundColor : 'white',
        marginTop : 40

    },

    imgStyle : {
      width : 280,
      height : 180,
      alignSelf : 'center'
    },

    textDiv : {
      textAlign : 'center',
      alignItems : 'center',
      alignSelf : 'center',
      width : '90%',
      paddingTop : 50
    },

    btnStyles :{
      position : 'absolute',
      bottom : 50,
      left : 0,
      right : 0,
      height : 50,
      backgroundColor : Colors.myRed,
      flexDirection : 'row',
      alignItems : 'center',
      paddingHorizontal : 20,
      marginHorizontal : 30,
      justifyContent : 'center',
      borderRadius : 10,     
    }
})