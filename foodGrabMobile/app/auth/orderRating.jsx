import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from "expo-router"

import Colors from '@/constants/Colors';

const orderRating = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', width: "100%" }}>
                <View style={{ flex: 1, width: "100%", alignItems: 'center' }}>
                    <Image source={require("../../assets/images/succes2.png")} style={{ width: 150, height: 150 }} />
                    <Text style={{ fontWeight: "800", fontFamily: "Railway2", fontSize: 20, marginBottom: 10 }}>How was your order</Text>
                    <Text style={{ fontFamily: "Railway2", fontSize: 13, fontWeight: "300" }}>Please rate this order to help us serve you better.</Text>
                </View>
                <View style={{ flex: 0.5, width: '100%' }}>
                    <Link href={"(tabs)/order"} asChild>
                        <TouchableOpacity style={styles.submitBtn}>
                            <Text style={{ fontFamily: "Railway2", color: "#fff" }}>Submit</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default orderRating
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 0,
    },
    submitBtn: {
        alignItems: "center",
        backgroundColor: Colors.myRed,
        padding: 13,
        paddingHorizontal: 20,
        width: '100%',
        borderRadius: 10
    }
})