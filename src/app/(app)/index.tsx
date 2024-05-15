import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, FlatList, StatusBar } from "react-native";

import { DummyData } from "../../data/DummyData";
import { ContentItem } from "../../types";
import FeedItem from "../../components/FeedItem";

export default function HomeScreen() {
  const [content, setContent] = useState<ContentItem[]>([]);

  // Simulated data for demo purposes
  useEffect(() => {
    // Fetch content data from API here
    const mockContentData: ContentItem[] = DummyData;
    setContent(mockContentData);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList
        data={content}
        renderItem={({ item }) => <FeedItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
