import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";

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
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adding a semi-transparent background to improve readability
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
