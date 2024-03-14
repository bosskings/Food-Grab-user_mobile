import { View, Text } from 'react-native'
import React, { useState } from 'react'

import Colors from '@/constants/Colors';

const OrderDetailsHeader = ({ order }) => {
    const [time, setTime] = useState(order.deliveryTime.getMinutes())
    return (
        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
                <Text style={{ fontSize: 20, fontWeight: "500", fontFamily: 'Railway2', }}>Order details</Text>
            </View>

            <View style={{ flexDirection: 'row', gap: 5 }}>
                <Text style={{ fontSize: 12, color: Colors.myGray }}>Arrives between</Text>
                <Text style={{ fontSize: 13, fontWeight: "800", }}>{time} mins</Text>
            </View>
        </View>
    )
}

export default OrderDetailsHeader