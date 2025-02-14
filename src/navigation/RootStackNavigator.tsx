import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./pages/HomeScreen";
import { Storybook } from "./pages/Storybook";
import { YourSandbox } from "./pages/YourSandbox";

export type RootStackParamList = {
  Home: undefined;
  Sandbox: undefined;
  Storybook: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: "Home",
  screens: {
    Home: HomeScreen,
    Sandbox: YourSandbox,
    Storybook: Storybook,
  },
});
