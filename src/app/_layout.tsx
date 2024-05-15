import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(app)/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
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
