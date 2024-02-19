import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router'

import { SafeAreaView } from 'react-native-safe-area-context'

const resturantPage = () => {
  return (
    <View style={styles.container}>
        <View>
            <View style={{display : 'flex', flexDirection : 'row', paddingBottom : 10}}>
                <Text style={{ fontFamily : 'Railway2', fontSize : 17, }}>Kilimanjaro - Big Tree</Text>
                <Text style={{marginLeft : 'auto', fontFamily : 'Railway1'}}>Open till 06:300 pm</Text>
            </View>
            <Image source={require('../../assets/images/rest1.png')}
                resizeMode='cover'
                style={{width : '100%', height : 100,
                borderRadius : 5
            }}
            />


            <View style={{display :'flex', 
                flexDirection : 'row', 
                justifyContent : 'space-between', 
                width : '100%',
                paddingTop : 10,
                borderBottomColor : Colors.myGray,
                borderBottomWidth : 1,
                paddingBottom : 10,
            }}>
                <View style={{borderRightColor : Colors.myGray, borderRightWidth : 1, paddingRight : 20}}>
                    <Text style={{fontFamily : 'Railway1', fontSize : 12, color : 'gray'}}>Preparation Time</Text>
                    <Text style={{fontFamily : 'Railway3', }}>5-20 minutes</Text>
                </View>

                <View style={{borderRightColor : Colors.myGray, borderRightWidth : 1, paddingRight : 20}}>
                    <Text style={{fontFamily : 'Railway1', fontSize : 12, color : 'gray'}}>Delivery Type</Text>
                    <Text style={{fontFamily : 'Railway3', }}>Instant Delivery</Text>
                </View>

                <View style={{}}>
                    <Text style={{fontFamily : 'Railway1', fontSize : 12, color : 'gray'}}>Rating</Text>
                    <Text style={{fontFamily : 'Railway3', }}>5.0 (123)</Text>
                </View>
            </View>

            <View style={{display : 'flex', flexDirection :'row', paddingVertical : 20, gap : 10}}>

                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={styles.btnText}>All</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.btnStyle1}>
                    <Text style={styles.btnText1}>What’s New</Text>
                </TouchableOpacity>

            </View>

            <ScrollView style={{paddingVertical : 10, height : '60%'}}>
                <TouchableOpacity>
                <View style={{display : 'flex', 
                    flexDirection : 'row', gap : 10, 
                    justifyContent : 'center', 
                    alignItems : 'center', 
                    borderBottomColor : Colors.myGray,
                    borderBottomWidth : 1,
                    paddingBottom : 15,
                    marginBottom : 15,
                }}>

                    <Image source={require('../../assets/images/imgFood4.png')}
                    style={{width : 70, height : 70, borderRadius : 5}}
                    />

                    <View style={{width : '75%'}}>
                    <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                        <Text style={{fontFamily : 'Railway2', fontSize : 15}}>Belle Combo</Text>
                    </View>

                    <Text style={{fontFamily : 'Railway1', 
                        fontSize : 12, color : 'gray', paddingVertical : 5,
                        textAlign : 'justify'
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipis icing elit. 
                        Maxime mollitia,molestiae quas vel sint.
                    </Text>
                    <Text style={{fontFamily : 'Railway1', color : Colors.btnGreen}}>From N3,000</Text>
                    </View>

                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={{display : 'flex', 
                    flexDirection : 'row', gap : 10, 
                    justifyContent : 'center', 
                    alignItems : 'center', 
                    borderBottomColor : Colors.myGray,
                    borderBottomWidth : 1,
                    paddingBottom : 15,
                    marginBottom : 15,
                }}>

                    <Image source={require('../../assets/images/imgFood3.png')}
                    style={{width : 70, height : 70, borderRadius : 5}}
                    />

                    <View style={{width : '75%'}}>
                    <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                        <Text style={{fontFamily : 'Railway2', fontSize : 15}}>Belle Combo</Text>
                    </View>

                    <Text style={{fontFamily : 'Railway1', 
                        fontSize : 12, color : 'gray', paddingVertical : 5,
                        textAlign : 'justify'
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipis icing elit. 
                        Maxime mollitia,molestiae quas vel sint.
                    </Text>
                    <Text style={{fontFamily : 'Railway1', color : Colors.btnGreen}}>From N3,000</Text>
                    </View>

                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={{display : 'flex', 
                    flexDirection : 'row', gap : 10, 
                    justifyContent : 'center', 
                    alignItems : 'center', 
                    borderBottomColor : Colors.myGray,
                    borderBottomWidth : 1,
                    paddingBottom : 15,
                    marginBottom : 15,
                }}>

                    <Image source={require('../../assets/images/imgFood2.png')}
                    style={{width : 70, height : 70, borderRadius : 5}}
                    />

                    <View style={{width : '75%'}}>
                    <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                        <Text style={{fontFamily : 'Railway2', fontSize : 15}}>Belle Combo</Text>
                    </View>

                    <Text style={{fontFamily : 'Railway1', 
                        fontSize : 12, color : 'gray', paddingVertical : 5,
                        textAlign : 'justify'
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipis icing elit. 
                        Maxime mollitia,molestiae quas vel sint.
                    </Text>
                    <Text style={{fontFamily : 'Railway1', color : Colors.btnGreen}}>From N3,000</Text>
                    </View>

                </View>
                </TouchableOpacity>


                <TouchableOpacity>
                <View style={{display : 'flex', 
                    flexDirection : 'row', gap : 10, 
                    justifyContent : 'center', 
                    alignItems : 'center', 
                    borderBottomColor : Colors.myGray,
                    borderBottomWidth : 1,
                    paddingBottom : 15,
                    marginBottom : 15,
                }}>

                    <Image source={require('../../assets/images/imgFood1.png')}
                    style={{width : 70, height : 70, borderRadius : 5}}
                    />

                    <View style={{width : '75%'}}>
                    <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                        <Text style={{fontFamily : 'Railway2', fontSize : 15}}>Belle Combo</Text>
                    </View>

                    <Text style={{fontFamily : 'Railway1', 
                        fontSize : 12, color : 'gray', paddingVertical : 5,
                        textAlign : 'justify'
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipis icing elit. 
                        Maxime mollitia,molestiae quas vel sint.
                    </Text>
                    <Text style={{fontFamily : 'Railway1', color : Colors.btnGreen}}>From N3,000</Text>
                    </View>

                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={{display : 'flex', 
                    flexDirection : 'row', gap : 10, 
                    justifyContent : 'center', 
                    alignItems : 'center', 
                    borderBottomColor : Colors.myGray,
                    borderBottomWidth : 1,
                    paddingBottom : 15,
                    marginBottom : 15,
                }}>

                    <Image source={require('../../assets/images/imgFood4.png')}
                    style={{width : 70, height : 70, borderRadius : 5}}
                    />

                    <View style={{width : '75%'}}>
                    <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                        <Text style={{fontFamily : 'Railway2', fontSize : 15}}>Belle Combo</Text>
                    </View>

                    <Text style={{fontFamily : 'Railway1', 
                        fontSize : 12, color : 'gray', paddingVertical : 5,
                        textAlign : 'justify'
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipis icing elit. 
                        Maxime mollitia,molestiae quas vel sint.
                    </Text>
                    <Text style={{fontFamily : 'Railway1', color : Colors.btnGreen}}>From N3,000</Text>
                    </View>

                </View>
                </TouchableOpacity>   
                           
            </ScrollView>
        </View>
    </View>
  )
}

export default resturantPage

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        flex : 1,
        paddingHorizontal : 20,
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
  
    btnStyle :{
      backgroundColor : Colors.btnGreen,
      display : 'flex',
      flexDirection : 'row',
      width : '20%',
      alignItems : 'center',
      padding : 10,
      alignSelf : 'center',
      justifyContent : 'center',
      borderRadius : 50,
      gap : 5,
    },
  
    btnText : {
      fontFamily : 'Railway2', color : 'white', fontSize : 13
    },
  
  
    btnText1 : {
      fontFamily : 'Railway2', color : Colors.btnGreen, fontSize : 13
    },
  
  
    btnStyle1 :{
      backgroundColor : 'white',
      display : 'flex',
      flexDirection : 'row',
      width : '40%',
      alignItems : 'center',
      borderColor : Colors.btnGreen,
      borderWidth : 1,
      padding : 10,
      textAlign : 'center',
      justifyContent : 'center',
      borderRadius : 50,
      gap : 5
    },
})