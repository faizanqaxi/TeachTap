import { Tabs } from "expo-router";
import HomeIcon from "../../assets/home.svg";
import DiscoverIcon from "../../assets/discover.svg";
import ActivityIcon from "../../assets/activity.svg";
import BookmarkIcon from "../../assets/bookmark.svg";
import ProfileIcon from "../../assets/profile.svg";

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
          tabBarIcon: ({ focused }) => (
            <HomeIcon width={28} height={28} fillOpacity={focused ? 1 : 0.4} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="(app)/discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ focused }) => (
            <DiscoverIcon
              width={28}
              height={28}
              fillOpacity={focused ? 1 : 0.4}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(app)/activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ focused }) => (
            <ActivityIcon
              width={28}
              height={28}
              fillOpacity={focused ? 1 : 0.4}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(app)/bookmark"
        options={{
          title: "Bookmark",
          tabBarIcon: ({ focused }) => (
            <BookmarkIcon
              width={28}
              height={28}
              fillOpacity={focused ? 1 : 0.4}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(app)/profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <ProfileIcon
              width={28}
              height={28}
              fillOpacity={focused ? 1 : 0.4}
            />
          ),
        }}
      />
    </Tabs>
  );
}
