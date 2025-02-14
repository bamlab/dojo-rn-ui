import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";

import { SkiaExample } from "../../joconde/SkiaExample/SkiaExample";
import type { RootStackParamList } from "../RootStackNavigator";

export const HomeScreen = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <SkiaExample />
      <View style={styles.spacer} />
      <Text>Bienvenue sur la sandbox du Dojo UI React Native</Text>
      <Button title="Go to Storybook" onPress={() => navigate("Storybook")} />
      <Button title="Go to Your Sandbox" onPress={() => navigate("Sandbox")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  spacer: {
    height: 50,
  },
});
