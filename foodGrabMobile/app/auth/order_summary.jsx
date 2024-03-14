import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const order_summary = () => {
  return (
    <View style={styles.container}>
      <Text>Checkout</Text>

      <View>
        <View>
          <Text>Order Summary</Text>
        </View>
      </View>
    </View>
  )
}

export default order_summary

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})