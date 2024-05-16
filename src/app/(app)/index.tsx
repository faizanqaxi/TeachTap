import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { ContentItem } from "../../types";
import FeedItem from "../../components/FeedItem";

export default function HomeScreen() {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch(
        "https://cross-platform.rp.devfactory.com/for_you"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setContent([data]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      {loading ? (
        <ActivityIndicator style={styles.loading}></ActivityIndicator>
      ) : (
        <FlatList
          data={content}
          renderItem={({ item }) => <FeedItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          pagingEnabled
          contentContainerStyle={{ justifyContent: "center" }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
