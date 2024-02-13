import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const wecomeOne = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text>wecomeOne</Text>
        </View>
    </SafeAreaView>
  )
}

export default wecomeOne

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'red',
        marginTop : 30
    }
})