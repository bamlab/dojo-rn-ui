import "expo-dev-client";

import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { MyFirstGestureHandler } from "./src/MyFirstGestureHandler/MyFirstGestureHandler";

export default function App() {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <MyFirstGestureHandler />
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
