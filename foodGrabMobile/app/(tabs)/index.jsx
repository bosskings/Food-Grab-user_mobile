import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import DashHeader from '../../components/DashHeader';
import { Link } from 'expo-router'

const index = () => {

  const [show, setShow] = useState(false);

  const hideAndShowOne = () =>{
    setShow(false);
  } 

  const hideAndShowTwo = () =>{
    setShow(true);
  }
  
  return (
    <SafeAreaView style={styles.container}>
        <DashHeader />

        <View style={{position : 'relative', paddingTop : 15}}>
          <Ionicons name='search' size={15} style={{position : 'absolute', top : 35, left : 15}}/>
          <TextInput placeholder='Search for your favourite food' style={styles.inputStyles}/>
          <Ionicons name='filter' size={15} style={{position : 'absolute', top : 35, right :15}}/>
        </View>

        <View>
            <View style={{paddingVertical : 10, paddingBottom : 0, }}>
              <Image source={require('../../assets/images/dashSec2.png')}
                style={styles.imageDIv}
                resizeMode='contain'
              />
            </View>

            
          <View style={{display : 'flex', flexDirection : 'row', gap : 10, paddingTop : 10}}>
            <TouchableOpacity style={show ? styles.btnStyle1 : styles.btnStyle} onPress={hideAndShowOne}>
              <Ionicons name='fast-food' color={show ? Colors.btnGreen  : 'white' } size={16}/>
              <Text style={show ? styles.btnText1 : styles.btnText}>Restaurant</Text>
            </TouchableOpacity>

            <TouchableOpacity style={show ? styles.btnStyle : styles.btnStyle1} onPress={hideAndShowTwo}>
              <Ionicons name='restaurant' size={16} color={!show ? Colors.btnGreen  : 'white' }/>
              <Text style={show ? styles.btnText : styles.btnText1}>Private Chef</Text>
            </TouchableOpacity>
          
          </View>
        </View>



        { show ? 
          <ScrollView style={{paddingTop : 20, }}>
            <Text style={{fontFamily : 'Railway2', fontSize : 17, paddingBottom : 20}}>Recommend Chef</Text>
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

                <Image source={require('../../assets/images/prof1.png')}
                  style={{width : 70, height : 70}}
                />

                <View style={{width : '75%'}}>
                  <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                    <Text style={{fontFamily : 'Railway2', fontSize : 16}}>Chef Ogechi San</Text>
                    <Text style={{fontSize : 15, marginLeft : 'auto'}}>5.0 (123)</Text>
                  </View>

                  <Text style={{fontFamily : 'Railway1', 
                    fontSize : 12, color : 'gray', paddingVertical : 5,
                    textAlign : 'justify'
                  }}>
                    Lorem ipsum dolor sit amet consectetur adipis icing elit. 
                    Maxime mollitia,molestiae quas vel sint.
                  </Text>
                  <Text style={{fontFamily : 'Railway1', color : Colors.btnGreen}}>From N10,000 | Schedule Request</Text>
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

                <Image source={require('../../assets/images/prof2.png')}
                  style={{width : 70, height : 70}}
                />

                <View style={{width : '75%'}}>
                  <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                    <Text style={{fontFamily : 'Railway2', fontSize : 16}}>Chef Ogechi San</Text>
                    <Text style={{fontSize : 15, marginLeft : 'auto'}}>5.0 (123)</Text>
                  </View>

                  <Text style={{fontFamily : 'Railway1', 
                    fontSize : 12, color : 'gray', paddingVertical : 5,textAlign : 'justify'
                  }}>
                    Lorem ipsum dolor sit amet consectetur adipis icing elit. 
                    Maxime mollitia,molestiae quas vel sint.
                  </Text>
                  <Text style={{fontFamily : 'Railway1', color : Colors.btnGreen}}>From N10,000 | Schedule Request</Text>
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

                <Image source={require('../../assets/images/prof3.png')}
                  style={{width : 70, height : 70}}
                />

                <View style={{width : '75%'}}>
                  <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                    <Text style={{fontFamily : 'Railway2', fontSize : 16}}>Chef Ogechi San</Text>
                    <Text style={{fontSize : 15, marginLeft : 'auto'}}>5.0 (123)</Text>
                  </View>

                  <Text style={{fontFamily : 'Railway1', 
                    fontSize : 12, color : 'gray', paddingVertical : 5, textAlign : 'justify'
                  }}>
                    Lorem ipsum dolor sit amet consectetur adipis icing elit. 
                    Maxime mollitia,molestiae quas vel sint.
                  </Text>
                  <Text style={{fontFamily : 'Railway1', color : Colors.btnGreen}}>From N10,000 | Schedule Request</Text>
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

                <Image source={require('../../assets/images/prof2.png')}
                  style={{width : 70, height : 70}}
                />

                <View style={{width : '75%'}}>
                  <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                    <Text style={{fontFamily : 'Railway2', fontSize : 16}}>Chef Ogechi San</Text>
                    <Text style={{fontSize : 15, marginLeft : 'auto'}}>5.0 (123)</Text>
                  </View>

                  <Text style={{fontFamily : 'Railway1', 
                    fontSize : 12, color : 'gray', paddingVertical : 5, textAlign : 'justify'
                  }}>
                    Lorem ipsum dolor sit amet consectetur adipis icing elit. 
                    Maxime mollitia,molestiae quas vel sint.
                  </Text>
                  <Text style={{fontFamily : 'Railway1', color : Colors.btnGreen}}>From N10,000 | Schedule Request</Text>
                </View>

              </View>
            </TouchableOpacity>
            
          </ScrollView> :
                      
          <ScrollView style={{paddingTop : 20, }}>
            <Text style={{fontFamily : 'Railway2', fontSize : 17, paddingBottom : 10}}>Available Restaurants</Text>
            <View>

              <View style={styles.restImageDiv}>
                <Image source={require('../../assets/images/rest1.png')}
                  resizeMode='cover'
                  style={styles.restImage}
                />

                <View style={{paddingHorizontal : 10, paddingVertical : 10}}>
                  <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', }}>
                    <Text style={{fontFamily : 'Railway3'}}>Kilimajaro - Big Tree</Text>
                    <Text style={{marginLeft : 'auto', fontFamily : 'Railway2'}}>5.0 (123)</Text>
                  </View>

                  <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', paddingTop : 10}}>
                      <Text style={{fontFamily : 'Railway1'}}>From N1000 | 5 - 10 mins</Text>
                      <TouchableOpacity style={{marginLeft : 'auto',}}>
                        <FontAwesome name='heart-o' color={Colors.btnGreen}  size={15}/>
                      </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.restImageDiv}>
                <Image source={require('../../assets/images/rest2.png')}
                  resizeMode='cover'
                  style={styles.restImage}
                />

                <View style={{paddingHorizontal : 10, paddingVertical : 10}}>
                  <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', }}>
                    <Text style={{fontFamily : 'Railway3'}}>Kilimajaro - Big Tree</Text>
                    <Text style={{marginLeft : 'auto', fontFamily : 'Railway2'}}>5.0 (123)</Text>
                  </View>

                  <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', paddingTop : 10}}>
                      <Text style={{fontFamily : 'Railway1'}}>From N1000 | 5 - 10 mins</Text>
                      <TouchableOpacity style={{marginLeft : 'auto',}}>
                        <FontAwesome name='heart-o' color={Colors.btnGreen}  size={15}/>
                      </TouchableOpacity>
                  </View>
                </View>
              </View>


              <View style={styles.restImageDiv}>
                <Image source={require('../../assets/images/rest1.png')}
                  resizeMode='cover'
                  style={styles.restImage}
                />

                <View style={{paddingHorizontal : 10, paddingVertical : 10}}>
                  <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', }}>
                    <Text style={{fontFamily : 'Railway3'}}>Kilimajaro - Big Tree</Text>
                    <Text style={{marginLeft : 'auto', fontFamily : 'Railway2'}}>5.0 (123)</Text>
                  </View>

                  <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', paddingTop : 10}}>
                      <Text style={{fontFamily : 'Railway1'}}>From N1000 | 5 - 10 mins</Text>
                      <TouchableOpacity style={{marginLeft : 'auto',}}>
                        <FontAwesome name='heart-o' color={Colors.btnGreen}  size={15}/>
                      </TouchableOpacity>
                  </View>
                </View>
              </View>



            </View>
          </ScrollView>
        }

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
      height : 120,
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
    width : '50%',
    alignItems : 'center',
    padding : 12,
    alignSelf : 'center',
    justifyContent : 'center',
    borderRadius : 50,
    gap : 5
  },

  btnText : {
    fontFamily : 'Railway2', color : 'white', fontSize : 15
  },


  btnText1 : {
    fontFamily : 'Railway2', color : Colors.btnGreen, fontSize : 15
  },


  btnStyle1 :{
    backgroundColor : 'white',
    display : 'flex',
    flexDirection : 'row',
    width : '50%',
    alignItems : 'center',
    borderColor : Colors.btnGreen,
    borderWidth : 1,
    padding : 12,
    textAlign : 'center',
    justifyContent : 'center',
    borderRadius : 50,
    gap : 5
  },

  restImageDiv :{
    borderColor : Colors.myGray,
    borderWidth : 1,
    borderRadius : 10,
    marginBottom : 20
  },


  restImage : {
    width : '100%',
    height : 100,
    borderTopRightRadius : 10,
    borderTopLeftRadius : 10,
  }

})