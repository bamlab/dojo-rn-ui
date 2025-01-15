import "expo-dev-client";

import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { MyFirstSkia } from "./src/joconde/MyFirstSkia/MyFirstSkia";

export default function App() {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <MyFirstSkia />
      </View>
    </GestureHandlerRootView>
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
