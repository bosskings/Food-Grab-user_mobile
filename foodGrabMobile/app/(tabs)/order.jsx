import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react';
import { Link } from 'expo-router'
import { FadeInLeft, FadeOutRight } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

import OrderHeader from '../components/OrderHeader'
import Colors from '@/constants/Colors';
import OrderData from '../dummyData/OrderData';

const order = () => {
  const [activeFilter, setActiveFilter] = useState('Active Order')
  const [orders, setOrder] = useState([])
  const [filterOrders, setFilterOrder] = useState([])

  useEffect(() => {
    setOrder(OrderData)
    setFilterOrder(OrderData.filter(order => order.category === activeFilter));
  }, [activeFilter])

  const handleWorkFilter = (item) => {
    setActiveFilter(item)

    setTimeout(() => {
      setFilterOrder(orders.filter((order) => order.category.includes(item)))
    }, 500)
  }
  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <SafeAreaView style={styles.container}>
      <OrderHeader />

      <View style={{ marginTop: 20 }}>
        <View style={styles.filterContainer}>
          {["Active Order", "Completed Order"].map((item, index) => (
            <TouchableOpacity style={activeFilter === item ? styles.active : styles.inActive} key={index} onPress={() => handleWorkFilter(item)}>
              <Text style={activeFilter === item ? styles.activeText : styles.inActiveText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {filterOrders.length > 0 ? (
        filterOrders.map((product, index) => (
          <ScrollView
            style={{ flex: 1, marginTop: 20 }}
            showsVerticalScrollIndicator={false}
            key={index}
          >
            <Animated.View style={styles.eachCartDiv} entering={FadeInLeft.duration(300).delay(200)} exiting={FadeOutRight.duration(300).delay(200)}>
              <View style={styles.eachCart}>
                <View style={{ overflow: 'hidden', width: 90, height: 80, borderRadius: 5 }}>
                  <Image
                    source={require("../../assets/images/combo1.png")}
                    style={{ width: 100, height: 100, }}
                  />
                </View>

                <View style={styles.cartRight}>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 25 }}>
                    <Text style={{ fontFamily: 'Railway2', fontSize: 18 }}>{product.title}</Text>
                    <View style={product.status === "Processing" ? styles.statusProcessing : styles.statusDelivered}>
                      <Text style={product.status === "Processing" ? styles.statusProcessingText : styles.statusDeliveredText}>{product.status}</Text>
                    </View>
                  </View>
                  <Text style={{ fontFamily: 'Railway2', fontSize: 12, paddingVertical: 6, color: "#54804D", fontWeight: "600" }}>{product.restaurant}</Text>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Text style={{ fontFamily: 'Railway3', fontSize: 13, color: 'gray', fontWeight: "600" }}>&#8358;{calculateTotalPrice(product.items)}</Text>
                  </View>
                </View>
              </View>

              {activeFilter === "Active Order" ? (
                <View>
                  <Link href={`auth/${product.id}`} asChild>
                    <TouchableOpacity style={{
                      alignItems: "center", backgroundColor: Colors.myGray, padding: 13, paddingHorizontal: 20, width: '100%', borderRadius: 10, marginTop: 10
                    }}>
                      <Text style={{ fontFamily: 'Railway2', color: 'black' }}>See Details</Text>
                    </TouchableOpacity>
                  </Link>
                </View>

              ) : (
                <View style={styles.checkOutDiv}>
                  <Link href={""} asChild>
                    <TouchableOpacity style={styles.seeDetails}>
                      <Text style={{ fontFamily: 'Railway2', color: 'black' }}>See Details</Text>
                    </TouchableOpacity>
                  </Link>
                  <TouchableOpacity style={styles.reOrderBtn}>
                    <Text style={{ fontFamily: 'Railway2', color: 'white' }}>Reorder</Text>
                  </TouchableOpacity>
                </View>
              )}

            </Animated.View>
          </ScrollView>
        ))
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 15 }}>
          <Image source={require("../../assets/images/Box.png")} />
          <Text style={{ fontFamily: 'Railway3' }}>You don’t have an active order</Text>
          <Link href={""} asChild>
            <TouchableOpacity style={styles.orderBtn}>
              <Text style={styles.activeText}>Place an order now</Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}
    </SafeAreaView>
  )
}


export default order

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 0,
  },

  filterContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: Colors.myRed,
    borderWidth: 1,
    borderRadius: 5
  },

  active: {
    alignItems: "center",
    backgroundColor: Colors.myRed,
    padding: 13,
    paddingHorizontal: 20,
    width: '50%',
    borderRadius: 5
  },

  inActive: {
    alignItems: "center",
    backgroundColor: 'white',
    padding: 13,
    paddingHorizontal: 20,
    width: '50%',
    borderRadius: 5,
  },

  activeText: {
    color: "#fff",
    fontFamily: 'Railway3'
  },
  inActiveText: {
    color: "#475367",
    fontFamily: 'Railway3'
  },

  orderBtn: {
    alignItems: "center",
    backgroundColor: Colors.myRed,
    padding: 13,
    paddingHorizontal: 20,
    width: '100%',
    borderRadius: 10
  },


  eachCartDiv: {
    borderColor: Colors.myGray,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  eachCart: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 5

  },

  cartRight: {},

  checkOutDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10
  },

  seeDetails: {
    alignItems: "center",
    backgroundColor: Colors.myGray,
    padding: 13,
    paddingHorizontal: 20,
    width: '48%',
    borderRadius: 10,
    marginTop: 10,
  },

  reOrderBtn: {
    alignItems: "center",
    backgroundColor: Colors.myRed,
    padding: 13,
    paddingHorizontal: 20,
    width: '48%',
    borderRadius: 10,
    marginTop: 10,
  },
  statusDelivered: {
    backgroundColor: "#D3FFCC",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50
  },
  statusDeliveredText: {
    fontSize: 12,
    color: '#54804D',
    fontWeight: "600"
  },
  statusProcessing: {
    backgroundColor: Colors.myGray,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50
  },
  statusProcessingText: {
    fontSize: 12,
    color: "#101010",
    fontWeight: "600"
  }
})