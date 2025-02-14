import { Fragment } from "react";
import { Button, StyleSheet } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export const ReanimatedExample = () => {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <Fragment>
      <Animated.View style={[{ width }, styles.animated]} />
      <Button onPress={handlePress} title="Click me" />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  animated: {
    height: 100,
    backgroundColor: "violet",
  },
});
