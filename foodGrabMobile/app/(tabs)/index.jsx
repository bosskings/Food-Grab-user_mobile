import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import DashHeader from '../../components/DashHeader';
import { Link } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
        <DashHeader />
        <View>

            <View style={{paddingVertical : 30, paddingBottom : 0}}>
              <Image source={require('../../assets/images/dashSec.png')}
                style={styles.imageDIv}
              />
            </View>


            <View style={{display: 'flex', paddingHorizontal : 10, flexDirection : 'row', alignItems : 'center', justifyContent : 'center', gap : 10}}>
              
              {/* <Link>
              </Link> */}
              <TouchableOpacity style={styles.imageDIvBorder}>
                <View>
                  <Image source={require('../../assets/images/foodSearch.png')}
                    style={{width : 130, height : 90, alignSelf : 'center'}}
                  />
                  <Text style={{textAlign : 'center', fontFamily : 'Railway2', fontSize : 15}}>Food</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.imageDIvBorder}>
                <View>
                  <Image source={require('../../assets/images/storeSearch.png')}
                    style={{width : 100, height : 100, alignSelf : 'center'}}
                  />
                  <Text style={{textAlign : 'center', fontFamily : 'Railway2', fontSize : 15}}>Restaurant</Text>
                </View>
              </TouchableOpacity>
            </View>
            

            <TouchableOpacity style={styles.imageDIvBorder2}>
                <View>
                  <Image source={require('../../assets/images/explore.png')}
                    style={{width : 100, height : 80, alignSelf : 'center'}}
                  />
                  <Text style={{textAlign : 'center', fontFamily : 'Railway2', fontSize : 15}}>Explore the app</Text>
                </View>
            </TouchableOpacity>

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
      height : 93
    },

    imageDIvBorder : {
      width : '50%', 
      height : '80%', 
      borderColor : Colors.myGray, 
      borderWidth : 1, 
      display : 'flex', 
      justifyContent : 'center',
      borderRadius : 10 
    },

    
    imageDIvBorder2 : {
      width : '100%', 
      height : '25%', 
      borderColor : Colors.myGray, 
      borderWidth : 1, 
      display : 'flex', 
      justifyContent : 'center',
      borderRadius : 10 ,
    }
})