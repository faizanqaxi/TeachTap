import { StyleSheet, Text, View } from "react-native";

export default function BookMarkScreen() {
  return (
    <View style={styles.container}>
      <Text>BookMark!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
