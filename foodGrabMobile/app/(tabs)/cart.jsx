import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>My Cart</Text>
    </SafeAreaView>
  )
}

export default cart

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems: 'center',
  }
})