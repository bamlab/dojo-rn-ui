import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { CircularMenu } from "../../joconde/CircularPopupMenu/Step3";
import { ColorfulLoader } from "../../joconde/ColorfulLoader/Step5";
import { GestureHandlerExample } from "../../joconde/GestureHandlerExample/GestureHandlerExample";
import { ReanimatedExample } from "../../joconde/ReanimatedExample/ReanimatedExample";
import { SkiaExample } from "../../joconde/SkiaExample/SkiaExample";

export const Storybook = () => {
  const [selectedComponentTitle, setSelectedComponentTitle] = useState<string>(
    "Circular Popup Menu",
  );

  const selectedComponentObject = findSelectedComponent(selectedComponentTitle);

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedComponentTitle}
        onValueChange={(itemValue) => setSelectedComponentTitle(itemValue)}
      >
        {components.map((component) => (
          <Picker.Item
            key={component.title}
            label={component.title}
            value={component.title}
          />
        ))}
      </Picker>
      <Separator />
      <View style={styles.componentContainer}>
        {selectedComponentObject?.component()}
      </View>
    </View>
  );
};

const Separator = () => <View style={styles.separator} />;

const components: { title: string; component: () => React.JSX.Element }[] = [
  {
    title: "Circular Popup Menu",
    component: () => <CircularMenu />,
  },
  {
    title: "Colorful loader",
    component: () => <ColorfulLoader />,
  },
  {
    title: "Skia example",
    component: () => <SkiaExample />,
  },
  {
    title: "GestureHandler example",
    component: () => <GestureHandlerExample />,
  },
  {
    title: "Reanimated example",
    component: () => <ReanimatedExample />,
  },
];

const findSelectedComponent = (selectedComponent: string | null) => {
  return components.find((component) => component.title === selectedComponent);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  componentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    margin: 8,
  },
});
