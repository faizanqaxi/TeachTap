import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  StatusBar,
} from "react-native";

import { DummyData } from "../../data/DummyData";
import { ContentItem } from "../../types";

const windowHeight = Dimensions.get("window").height;

export default function HomeScreen() {
  const [content, setContent] = useState<ContentItem[]>([]);

  // Simulated data for demo purposes
  useEffect(() => {
    // Fetch content data from API here
    const mockContentData: ContentItem[] = DummyData;
    setContent(mockContentData);
  }, []);

  const renderItem = ({ item }: { item: ContentItem }) => (
    <TouchableOpacity style={styles.card}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.backgroundImage}
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

  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList
        data={content}
        renderItem={({ item }) => renderItem({ item })}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    borderRadius: 8,
    overflow: "hidden",
    height: windowHeight,
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
