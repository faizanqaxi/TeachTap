import React, { useState, useEffect } from "react";
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
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 60000); // Update every minute (60,000 milliseconds)

    return () => clearInterval(timer);
  }, []);

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours > 0 ? hours + "h" : ""} ${remainingMinutes}m`;
  };

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
            <Text style={styles.timerText}>{formatTime(timeElapsed)}</Text>
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
                <Text key={index} style={styles.optionText}>
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

        {/* Playlist */}
        <View style={styles.playlistContainer}>
          <View style={styles.playlistIcon}>
            <PlaylistIcon width={20} height={20} />
          </View>
          <Text style={styles.playlistText}>Playlist: {item.playlist}</Text>
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
    height: 2,
    width: "100%",
    position: "absolute",
    bottom: -4,
    left: 0,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
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
  optionText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 13,
    borderRadius: 8,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  bottomContent: {
    marginBottom: 0,
  },
  author: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
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
  playlistContainer: {
    flexDirection: "row",
    padding: 7,
    marginTop: "auto",
    marginBottom: 50,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  playlistIcon: {
    marginLeft: 10,
    alignItems: "center",
  },
  playlistText: {
    color: "#fff",
    fontSize: 13,
    marginLeft: 10,
  },
});
