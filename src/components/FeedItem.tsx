import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for the icons
import { ContentItem } from "../types";
import { useWindowDimensions } from "react-native";

export default function FeedItem({ item }: { item: ContentItem }) {
  const { height } = useWindowDimensions();

  return (
    <TouchableOpacity style={[styles.card, { height: height }]}>
      <ImageBackground
        source={{ uri: item.image }}
        style={[styles.backgroundImage, { height: height }]}
      >
        {/* Top Bar */}
        <View style={styles.topBar}>
          <View style={styles.left}>
            <Ionicons name="timer" size={24} color="white" />
            <Text style={styles.timerText}>10m</Text>
          </View>
          <View style={styles.forYouContainer}>
            <Text style={styles.forYouText}>For You</Text>
            <View style={styles.indicator} />
          </View>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
        {/* End Top Bar */}

        <View style={styles.contentContainer}>
          <Text style={styles.question}>{item.question}</Text>
          <View style={styles.options}>
            {item.options.map((option, index) => (
              <Text key={index} style={styles.option}>
                {option.answer}
              </Text>
            ))}
          </View>
          <Text style={styles.author}>{item.user.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
    height: 60, // Adjust the height of the top bar as needed
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  timerText: {
    color: "white",
    marginLeft: 8,
  },
  forYouContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  forYouText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  indicator: {
    backgroundColor: "white",
    height: 2, // Adjust the height of the indicator as needed
    width: "100%", // Set width to 100% to span beneath the "For You" text
    position: "absolute", // Position indicator absolutely to overlap with "For You" text
    bottom: -4, // Adjust bottom position to fit the indicator below the "For You" text
    left: 0, // Align indicator with the left edge of the "For You" text
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  options: {
    marginBottom: 8,
  },
  option: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    color: "#fff",
  },
  description: {
    fontSize: 14,
    color: "#fff",
  },
});
