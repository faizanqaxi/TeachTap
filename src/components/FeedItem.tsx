import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { ContentItem } from "../types";
import { useWindowDimensions } from "react-native";

import ShareIcon from "../../assets/share.svg";
import BookmarkIcon from "../../assets/bookmark.svg";
import CommentIcon from "../../assets/comment.svg";
import HeartIcon from "../../assets/heart.svg";
import PlaylistIcon from "../../assets/playlist.svg";
import ActivityIcon from "../../assets/activity.svg";
import SearchIcon from "../../assets/search.svg";

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
            <ActivityIcon width={24} height={24} />
            <Text style={styles.timerText}>10m</Text>
          </View>
          <View style={styles.forYouContainer}>
            <Text style={styles.forYouText}>For You</Text>
            <View style={styles.indicator} />
          </View>
          <TouchableOpacity>
            <SearchIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
        {/* End Top Bar */}

        <View style={styles.innerContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.question}>{item.question}</Text>
            <View style={styles.optionsContainer}>
              {item.options.map((option, index) => (
                <Text key={index} style={styles.option}>
                  {option.answer}
                </Text>
              ))}
            </View>

            <View style={styles.bottomContent}>
              <Text style={styles.author}>{item.user.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>

          {/* Action Icons */}
          <View style={styles.actionIcons}>
            <View
              style={[
                styles.actionIcon,
                {
                  backgroundColor: "#ad6f28",
                  borderRadius: 100,
                  padding: 10,
                  borderWidth: 2,
                  borderColor: "white",
                },
              ]}
            >
              <FontAwesome5 size={28} name="scroll" color="#fac107" />
            </View>
            <View style={styles.actionIcon}>
              <HeartIcon width={35} height={35} />
              <Text style={styles.actionIconText}>87</Text>
            </View>
            <View style={styles.actionIcon}>
              <CommentIcon width={35} height={35} />
              <Text style={styles.actionIconText}>2</Text>
            </View>
            <View style={styles.actionIcon}>
              <BookmarkIcon width={35} height={35} />
              <Text style={styles.actionIconText}>203</Text>
            </View>
            <View style={styles.actionIcon}>
              <ShareIcon width={35} height={35} />
              <Text style={styles.actionIconText}>17</Text>
            </View>
          </View>
          {/* End Action Icons */}
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
  innerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    // justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  questionContainer: {
    marginBottom: 8,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 10,
    borderRadius: 8,
  },
  optionsContainer: {
    marginTop: "auto",
    marginBottom: 8,
  },
  option: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 13,
    borderRadius: 8,
  },
  bottomContent: {
    marginBottom: 50,
  },
  author: {
    fontSize: 14,
    color: "#fff",
  },
  description: {
    fontSize: 14,
    color: "#fff",
  },
  actionIcons: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 8,
    marginBottom: 60,
    borderRadius: 8,
  },
  actionIcon: {
    marginBottom: 20,
    alignItems: "center",
  },
  actionIconText: {
    color: "white",
  },
});
