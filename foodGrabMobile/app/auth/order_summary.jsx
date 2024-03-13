import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const order_summary = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily : 'Railway2', fontSize : 20, paddingHorizontal : 20}}>Checkout</Text>

      <View>
        <View style={styles.grayBG}>
          <Text style={{fontFamily : 'Railway3', fontSize : 15}}>Order Summary</Text>
        </View>
        <View style={{display : 'flex', flexDirection : 'row', paddingHorizontal : 20, borderBottomWidth : 1, borderBottomColor : Colors.myGray, paddingVertical : 10}}>
          <View style={{display : 'flex', flexDirection : 'row', gap : 10}}>
            <View style={{width : 65, height : 50, overflow : 'hidden', borderRadius : 5}}>
              <Image source={require('../../assets/images/imgFood2.png')} style={{width  : 70, height : 70}}/>
            </View>

            <View>
              <Text style={{fontFamily : 'Railway2', fontSize : 18}}>Belle Combo</Text>
              <Text style={{fontFamily : 'Railway3', color : Colors.myLightGreen, fontSize : 11, paddingTop : 6}}>Kilimajaro - Big Tree</Text>
            </View>
          </View>

          <Text style={{marginLeft : 'auto', color : 'gray', fontFamily : 'Railway1', fontSize : 12}}>View Selection</Text>
        </View>

        <View style={{paddingHorizontal : 20, paddingTop : 10}}>
          <Text style={{fontFamily : 'Railway1', fontSize : 11, color : 'grey', paddingBottom : 5}}>Delivery Address</Text>
          <View style={{display : 'flex', flexDirection : 'row', gap : 5, alignItems : 'flex-start'}}>
            <Ionicons name='location-outline' size={18} color ={Colors.myLightGreen}/>
            <Text style={{fontFamily : 'Railway3', fontSize : 15}}>Iwofe, Port Harcourt</Text>
            <Ionicons name='chevron-down' size={18} />
          </View>
        </View>

        <View style={styles.grayBG}>
          <Text style={{fontFamily : 'Railway3', fontSize : 15}}>Payment Summary</Text>
        </View>

        <View style={{paddingHorizontal : 20, paddingTop : 10}}>
          <View style={styles.paymentDiv}>
            <Text>Sub-Total  (3 Items)</Text>
            <Text style={{marginLeft : 'auto'}}>N3,700.00</Text>
          </View>

          <View style={styles.paymentDiv}>
            <Text>Delivery Fee</Text>
            <Text style={{marginLeft : 'auto'}}>N3,700.00</Text>
          </View>

          <View style={styles.paymentDiv}>
            <Text>Booking Fee</Text>
            <Text style={{marginLeft : 'auto'}}>N3,700.00</Text>
          </View>

          <View style={styles.paymentDiv}>
            <Text>Total</Text>
            <Text style={{marginLeft : 'auto'}}>N3,700.00</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default order_summary

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'white',
    // paddingHorizontal : 20
  },

  grayBG : {
    padding : 10,
    backgroundColor : Colors.myLightGray,
    borderRadius : 5,
    paddingHorizontal : 20,
    marginTop : 10
  },

  paymentDiv : {
    display : 'flex',
    flexDirection : 'row',

  }
})