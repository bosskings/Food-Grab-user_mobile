import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, useNavigation } from 'expo-router';

import Colors from '@/constants/Colors';

const cart = () => {
  const navigate = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cart}>
        <Image source={require("../../assets/images/box.png")} style={styles.cartImg} />
        <Text style={styles.emptyCart}>Your Cart is empty</Text>

        <TouchableOpacity style={styles.addbtn} onPress={navigate.goBack}>
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 17, fontFamily: "Railway1", }}>Add items to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

export default cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: 'white',
    paddingHorizontal: 20
  },

  cart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  cartImg: {
    marginBottom: 20
  },
  emptyCart: {
    fontFamily: "Railway1",
    fontSize: 16,
    fontWeight: "600",
    color: "#383838"
  },
  addbtn: {
    width: "100%",
    backgroundColor: Colors.myRed,
    alignItems: 'center',
    padding: 15,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 50
  }
})