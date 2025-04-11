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
import { StyleSheet, View } from "react-native";

const MENU_ITEMS = [
  { icon: faHome },
  { icon: faHeart },
  { icon: faComment },
  { icon: faStar },
  { icon: faPhone },
  { icon: faCog },
] as const;

export const CircularMenu = () => {
  return (
    <View style={styles.screen}>
      <MenuItem icon={MENU_ITEMS[0].icon} />
      <View
        style={[styles.menuButtonWrapper, { backgroundColor: colors.primary }]}
      >
        <MenuButton />
      </View>
    </View>
  );
};

const MenuButton = () => {
  return (
    <View style={styles.menuButton}>
      <View
        style={[
          styles.menuButtonLine,
          { transform: [{ translateY: -0.3 * BUTTON_SIZE }] },
        ]}
      />
      <View style={styles.menuButtonLine} />
      <View
        style={[
          styles.menuButtonLine,
          { transform: [{ translateY: 0.3 * BUTTON_SIZE }] },
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
