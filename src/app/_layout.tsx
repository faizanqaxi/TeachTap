import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from "react-native";
import * as Svg from "react-native-svg";

import HomeIcon from "../../assets/home.svg";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="(app)/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            // <Image
            //   source={require("../../assets/favicon.png")}
            //   style={{ width: 28, height: 28 }}
            // />
            <HomeIcon width={28} height={28} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(app)/discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(app)/activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="times-circle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(app)/bookmark"
        options={{
          title: "Bookmark",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="bookmark" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(app)/profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
