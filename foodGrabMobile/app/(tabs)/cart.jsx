import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const cart = () => {

  const [addedItems, setAddedItems] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{paddingLeft : 20, fontFamily : 'Railway2', paddingTop : 30, fontSize : 20}}>My Cart</Text>

      {addedItems ? (

        <View style={styles.container2}>

        <View >
          <Image 
            source={require('../../assets/images/Box.png')}
          />
        </View>
          <Text style={{paddingVertical : 20, fontFamily : 'Railway1'}}>Your Cart is empty</Text>

        <TouchableOpacity style={styles.btnStyles}>
          <Text style={{color : 'white'}}>Add Items to cart</Text>
        </TouchableOpacity>
        </View>

      ) : (

        <View style={styles.container3}>

          <View style={styles.eachCartDiv}>
            <View style={styles.eachCart}>
              <View style={{overflow : 'hidden', width : 80, height : 80, borderRadius : 5}}>
                <Image 
                  source={require('../../assets/images/imgFood2.png')}
                  style={{width : 100, height : 100, }}
                />
              </View>

              <View style={styles.cartRight}>
                <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', gap : 50}}>
                  <Text style={{fontFamily : 'Railway2', fontSize : 18}}>Belle Combo</Text> 
                  <Text style={{fontFamily : 'Railway1', marginLeft : 'auto', fontSize : 12}}>3 Items</Text>
                </View>
                <Text style={{fontFamily : 'Railway1', fontSize : 12}}>Kilimajaro - Big Tree</Text>
                <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', gap : 10}}>
                  <FontAwesome name='motorcycle' size={15} color={Colors.myRed}/>
                  <Text style={{fontFamily : 'Railway1'}}>Delivering to Iwofe, PH</Text>
                </View>
              </View>
              
            </View>

            <View style={styles.checkOutDiv}>
              <TouchableOpacity style={styles.checkOutBtn}>
                <Text style={{fontFamily : 'Railway2', color : 'white'}}>Checkout</Text>
              </TouchableOpacity>
              <Text style={{fontFamily : 'Railway2'}}>View Selection</Text>
                <Ionicons name='trash-outline' size={15} color={Colors.myRed}/>
            </View>
          </View>
      </View>
      )}
    </SafeAreaView>
  )
}

export default cart

const styles = StyleSheet.create({
  container : {
    flex : 1,

  },


  container2 : {
    flex : 1,
    justifyContent : 'center',
    alignItems: 'center',
    paddingHorizontal : 20
  },



  btnStyles :{
    height : 40,
    backgroundColor : Colors.myRed,
    flexDirection : 'row',
    alignItems : 'center',
    paddingHorizontal : 20,
    justifyContent : 'center',
    borderRadius : 10,  
    marginTop : 10,
    width : '80%',
},

container3 : {
  flex : 1,
  paddingHorizontal : 20,
},

eachCartDiv : {
  borderColor : Colors.myGray,
  borderWidth : 1,
  padding : 10,
  borderRadius : 10,
  marginTop : 20
},

eachCart : {
  display : 'flex',
  flexDirection : 'row',
  gap : 10,
  alignItems : 'center',
  marginBottom : 10

},

cartRight : {},

checkOutDiv : {
  display : 'flex',
  flexDirection : 'row',
  alignItems : 'center',
  justifyContent : 'space-between'
},

checkOutBtn : {
  height : 35,
  backgroundColor : Colors.myRed,
  flexDirection : 'row',
  alignItems : 'center',
  paddingHorizontal : 20,
  justifyContent : 'center',
  borderRadius : 10,  
  marginTop : 10,
  width : '40%',
}



  
})