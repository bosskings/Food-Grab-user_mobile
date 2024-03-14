import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Link, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Octicons, Entypo, Ionicons, FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';


import OrderDetailsHeader from '../components/OrderDetailsHeader';
import OrderData from '../dummyData/OrderData';
import Colors from '@/constants/Colors';

const orderDetails = () => {
    const { id } = useLocalSearchParams();
    const order = OrderData.find(item => item.id === parseInt(id));

    const [currentStage, setCurrentStage] = useState('PROCESSING');

    useEffect(() => {
        const stages = Object.values(order.deliveryStatus);
        let currentIndex = stages.indexOf(order.deliveryStatus);

        if (order.deliveryStatus === 'PROCESSING') {
            currentIndex++;
        }

        const interval = setInterval(() => {
            currentIndex++;
            if (currentIndex >= stages.length) {
                clearInterval(interval);
                return;
            }
            setCurrentStage(stages[currentIndex]);
        }, 2000);

        return () => clearInterval(interval);
    }, [order]);

    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
    };

    return (
        <View style={styles.container}>
            <OrderDetailsHeader order={order} />

            <View style={{ marginTop: 20, gap: 20, width: "100%" }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Octicons name="note" size={24} color={currentStage === "PROCESSING" ? "#54804D" : "black"} />
                    <Entypo name="box" size={24} color={currentStage === "PACKAGED" ? "#54804D" : "black"} />
                    <Ionicons name="bicycle" size={24} color={currentStage === "ON_ROUTE" ? "#54804D" : "black"} />
                    <FontAwesome5 name="check-circle" size={24} color={currentStage === "DELIVERD" ? "#54804D" : "black"} />
                </View>
                <Image source={require("../../assets/images/dash.png")} style={{ width: "100%" }} />
                {['PACKAGED', 'ON_ROUTE', 'DELIVERD'].includes(currentStage) ? (
                    <View style={{ gap: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <Image source={require("../../assets/images/63951fa2f338b6c099eb424d64c75fd6.jpg")} style={{ borderRadius: 50, width: 70, height: 70, }} />
                                <View style={{ flexDirection: 'column', justifyContent: 'space-between', gap: 10 }}>
                                    <Text style={{ fontWeight: "600", fontSize: 18 }}>{order.Grabber.name}</Text>
                                    <Text style={{ color: Colors.myGray, fontWeight: "500" }}>Grabber</Text>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity style={{ backgroundColor: Colors.myGray, padding: 10, borderRadius: 50 }}>
                                    <Feather name="phone" size={22} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Image source={require("../../assets/images/dash.png")} style={{ width: "100%" }} />
                    </View>
                ) : null}
                <View style={{ width: "100%", gap: 20 }}>
                    <Text style={{ fontWeight: "600", fontSize: 18, fontFamily: 'Railway2', }}>Items Ordered</Text>
                    <View style={{ gap: 15 }}>
                        {order.items.map((item) => (
                            <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ color: "#385533", fontWeight: "500", fontSize: 16, fontFamily: "Railway2" }}>{item.itemName}</Text>
                                <Text style={{ color: "#878787", fontSize: 16, fontWeight: "500", fontFamily: "Railway2" }}>&#8358;{item.price}</Text>
                            </View>
                        ))}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text style={{ color: Colors.myRed, fontWeight: "500", fontSize: 16, fontFamily: "Railway2" }}>Total</Text>
                            <Text style={{ color: Colors.myRed, fontWeight: "500", fontSize: 16, fontFamily: "Railway2" }}>&#8358;{calculateTotalPrice(order.items)}</Text>
                        </View>
                    </View>
                </View>
                <Image source={require("../../assets/images/dash.png")} style={{ width: "100%" }} />
                <View style={{ width: "100%", gap: 10 }}>
                    <Text style={{ fontWeight: "600", fontSize: 15, fontFamily: 'Railway2', }}>Restaurant</Text>
                    <Text style={{ color: "#54804D", fontWeight: "500", fontSize: 18, fontFamily: "Railway2" }}>{order.restaurant}</Text>
                </View>
                <Image source={require("../../assets/images/dash.png")} style={{ width: "100%" }} />
                <View style={{ width: "100%", gap: 10 }}>
                    <Text style={{ fontWeight: "600", fontSize: 15, fontFamily: 'Railway2', }}>Payment Method</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <MaterialCommunityIcons name="wallet-outline" size={24} color="#70AA67" />
                        <Text style={{ color: "black", fontWeight: "400", fontSize: 15, fontFamily: "Railway2" }}>{order.paymentMethod}</Text>
                    </View>
                </View>

                {currentStage === "DELIVERD" && (
                    <View style={{ width: "100%" }}>
                        <Link href={"auth/orderRating"} asChild>
                            <TouchableOpacity style={styles.rateBtn}>
                                <Text style={{ color: "#fff", fontFamily: "Railway3" }}>Rate your order</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                )}
            </View>
        </View>
    )
}

export default orderDetails
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 0,
    },
    rateBtn: {
        alignItems: "center",
        backgroundColor: Colors.myRed,
        padding: 13,
        paddingHorizontal: 20,
        width: '100%',
        borderRadius: 10
    }
})