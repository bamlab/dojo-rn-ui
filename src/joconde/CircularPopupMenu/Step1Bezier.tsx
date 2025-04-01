/* eslint-disable react-native/no-inline-styles */
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faCog,
  faComment,
  faHeart,
  faHome,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import type { CSSTransitionProperties } from "react-native-reanimated";
import Animated, { cubicBezier } from "react-native-reanimated";

const MENU_ITEMS = [
  { icon: faHome },
  { icon: faHeart },
  { icon: faComment },
  { icon: faStar },
  { icon: faPhone },
  { icon: faCog },
] as const;

export const CircularMenu = () => {
  const [open, setOpen] = useState(false);

  // This will animate any property that is in the transitionProperty (here : all)
  // transitionDuration is required for the transition to work
  const transitionProperties: CSSTransitionProperties = {
    transitionDuration: 400,
    transitionProperty: ["all", "backgroundColor"],
    // We can use a custom bezier curve for all the properties
    // or a different one for each property
    transitionTimingFunction: [
      cubicBezier(0.175, 0.885, 0.32, 1.275),
      "ease-out",
    ],
  };

  return (
    <View style={styles.screen}>
      <MenuItem icon={MENU_ITEMS[0].icon} />
      <Pressable
        onPress={() => {
          setOpen((prev) => !prev);
        }}
      >
        <Animated.View
          style={[
            styles.menuButtonWrapper,
            transitionProperties,
            {
              backgroundColor: open ? colors.primaryDark : colors.primary,
              transform: [{ scale: open ? 0.75 : 1 }],
            },
          ]}
        >
          <MenuButton open={open} />
        </Animated.View>
      </Pressable>
    </View>
  );
};

type MenuButtonProps = {
  open: boolean;
};

const MenuButton = ({ open }: MenuButtonProps) => {
  const transitionProperties: CSSTransitionProperties = {
    transitionDuration: 200,
    transitionProperty: "all",
  };
  const lineStyle = [transitionProperties, styles.menuButtonLine];

  return (
    <View style={styles.menuButton}>
      <Animated.View
        style={[
          lineStyle,
          {
            transform: open
              ? [{ rotate: "45deg" }]
              : [{ translateY: -0.3 * BUTTON_SIZE }],
          },
        ]}
      />
      <Animated.View
        style={[
          lineStyle,
          {
            opacity: open ? 0 : 1,
          },
        ]}
      />
      <Animated.View
        style={[
          lineStyle,
          {
            transform: open
              ? [{ rotate: "-45deg" }]
              : [{ translateY: 0.3 * BUTTON_SIZE }],
          },
        ]}
      />
    </View>
  );
};

const MenuItem = ({ icon }: { icon: IconDefinition }) => {
  return (
    <View style={styles.menuItem}>
      <FontAwesomeIcon icon={icon} size={24} color={colors.white} />
    </View>
  );
};

const colors = {
  white: "#FCFCFF",
  primary: "#5F9CC0",
  primaryDark: "#113E60",
};

const BUTTON_SIZE = 24;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    alignItems: "center",
    justifyContent: "center",
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
  },
  menuButtonLine: {
    backgroundColor: colors.white,
    borderRadius: 9999,
    height: 3,
    position: "absolute",
    width: "100%",
  },
  menuButtonWrapper: {
    borderRadius: 9999,
    padding: 24,
  },
  menuItem: {
    backgroundColor: colors.primary,
    borderRadius: 9999,
    padding: 16,
    position: "absolute",
  },
});
