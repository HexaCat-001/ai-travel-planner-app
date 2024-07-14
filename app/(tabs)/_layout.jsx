import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false,
    }}>
      <Tabs.Screen name="mytrip" options={{
        tabBarLabel: 'My Trip',
        tabBarIcon : ({color}) => <Ionicons name="location" size={24} color="black" />
      }}/>
      <Tabs.Screen name="discover" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabLayout;
