import React from "react";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "@/constants/Colors";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Stack, useNavigation } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function TabLayout() {
  const [loaded, error] = useFonts({
    Railway1: require("../../assets/fonts/Raleway-Regular.ttf"),
    Railway2: require("../../assets/fonts/Raleway-Bold.ttf"),
    Railway3: require("../../assets/fonts/Raleway-SemiBold.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "white",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            fontSize: 13,
            paddingBottom: 10,
          },
          title: "",
          headerLeft: () => (
            <TouchableOpacity style={{ marginHorizontal: 20 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Ionicons
                  name="location-outline"
                  size={20}
                  color={Colors.myLightGreen}
                />
                <Text
                  style={{
                    fontFamily: "Railway3",
                    fontSize: 15,
                    paddingLeft: 5,
                  }}
                >
                  Iwofe, Port Harcourt
                </Text>
                <Ionicons name="chevron-down" size={20} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ marginHorizontal: 20 }}>
              <Ionicons name="notifications-outline" size={20} />
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                size={focused ? 25 : 20}
                style={{ marginBottom: -3, textAlign: "center" }}
                name="home-outline"
                color={focused ? Colors.myGreen : "gray"}
              />
              <Text
                style={{
                  color: focused ? Colors.myGreen : "gray",
                  marginLeft: 0,
                  fontFamily: "Railway1",
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "Cart",
          tabBarLabelStyle: {
            fontSize: 13,
            paddingBottom: 10,
          },
          headerTitle: "My Cart",
          headerTitleStyle: { fontWeight: "bold", fontFamily: "Railway1" },
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                size={focused ? 25 : 20}
                style={{ marginBottom: -3, textAlign: "center" }}
                name="cart-outline"
                color={focused ? Colors.myGreen : "gray"}
              />
              <Text
                style={{
                  color: focused ? Colors.myGreen : "gray",
                  marginLeft: 0,
                  fontFamily: "Railway1",
                  fontSize: 12,
                }}
              >
                Cart
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="order"
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "Order",
          tabBarLabelStyle: {
            fontSize: 13,
            paddingBottom: 10,
          },
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                size={focused ? 25 : 20}
                style={{ marginBottom: -3, textAlign: "center" }}
                name="bag-outline"
                color={focused ? Colors.myGreen : "gray"}
              />
              <Text
                style={{
                  color: focused ? Colors.myGreen : "gray",
                  marginLeft: 0,
                  fontFamily: "Railway1",
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                Order
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "Account",
          tabBarLabelStyle: {
            fontSize: 13,
            paddingBottom: 10,
          },
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                size={focused ? 25 : 20}
                style={{ marginBottom: -3, textAlign: "center" }}
                name="person-outline"
                color={focused ? Colors.myGreen : "gray"}
              />
              <Text
                style={{
                  color: focused ? Colors.myGreen : "gray",
                  marginLeft: 0,
                  fontFamily: "Railway1",
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
