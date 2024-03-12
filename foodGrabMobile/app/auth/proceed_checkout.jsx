import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors';

const proceed_checkout = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{flex : 1, position : 'relative'}}>

        <View style={styles.viewSelction}>
            <Text style={{fontSize : 17, fontFamily : 'Railway2'}}>View Selection</Text>
            <TouchableOpacity >
                <FontAwesome name='trash' color={Colors.myRed} size={18}/>
            </TouchableOpacity>
        </View>

        <View >
            <View style={styles.cartDiv}>
                <Text style={{fontFamily : 'Railway3', fontSize : 15}}>Jollof Rice</Text>
                <Text style={{fontFamily : 'Railway3', fontSize : 15, color : 'grey'}}>N2500</Text>

                <View style={styles.iconDiv}>

                    <TouchableOpacity>
                        <Text style={{fontFamily : 'Railway1', fontSize : 35}}>-</Text>
                    </TouchableOpacity>

                    <Text style={{fontFamily : 'Railway1', fontSize : 25}}>1</Text>

                    <TouchableOpacity>
                        <Text style={{fontFamily : 'Railway1', fontSize : 35}}>+</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.cartDiv}>
                <Text style={{fontFamily : 'Railway3', fontSize : 15}}>Drink (Coke)</Text>
                <Text style={{fontFamily : 'Railway3', fontSize : 15, color : 'grey'}}>N900</Text>

                <View style={styles.iconDiv}>

                    <TouchableOpacity>
                        <Text style={{fontFamily : 'Railway1', fontSize : 35}}>-</Text>
                    </TouchableOpacity>

                    <Text style={{fontFamily : 'Railway1', fontSize : 25}}>1</Text>

                    <TouchableOpacity>
                        <Text style={{fontFamily : 'Railway1', fontSize : 35}}>+</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.cartDiv}>
                <Text style={{fontFamily : 'Railway3', fontSize : 15}}>Chicken (Spicy Fried)</Text>
                <Text style={{fontFamily : 'Railway3', fontSize : 15, color : 'grey'}}>N300</Text>

                <View style={styles.iconDiv}>

                    <TouchableOpacity>
                        <Text style={{fontFamily : 'Railway1', fontSize : 35}}>-</Text>
                    </TouchableOpacity>

                    <Text style={{fontFamily : 'Railway1', fontSize : 25}}>1</Text>

                    <TouchableOpacity>
                        <Text style={{fontFamily : 'Railway1', fontSize : 35}}>+</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.btnDivs}>
                <TouchableOpacity style={styles.eachBtn}>
                    <FontAwesome name='plus'/>
                    <Text style={{fontFamily : 'Railway3', fontSize : 15, }}>Add more</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.eachBtn}>
                    <FontAwesome name='copy'/>
                    <Text style={{fontFamily : 'Railway3', fontSize : 15, }}>Duplicate pack</Text>
                </TouchableOpacity>
            </View>
        </View>

      </View>


      <View style={styles.bottomBtns}>
        <TouchableOpacity>
            <Text>Proceed to Checkout</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>Cancel Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default proceed_checkout

const styles = StyleSheet.create({
    container : {
      flex : 1,
      backgroundColor : 'red',
      padding : 20,
      paddingTop : 0,
      position : 'relative',
    },

    viewSelction : {
        display : 'flex',
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },

    cartDiv : {
        flex : 1,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingTop : 20
    },

    iconDiv : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        gap : 20,
        alignItems : 'center',
        backgroundColor : Colors.lighterGreen,
        paddingHorizontal : 20
    },

    btnDivs :{
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        gap : 20,
        paddingTop : 20,
    },

    eachBtn : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        gap : 5,
        borderWidth : 1,
        borderColor : Colors.myGray,
        padding : 13,
        paddingHorizontal : 20,
        borderRadius : 10,
        borderStyle : 'dashed'
    },

    bottomBtns : {
        position : 'absolute',
        bottom : 0,
        right : 0,
    }

})