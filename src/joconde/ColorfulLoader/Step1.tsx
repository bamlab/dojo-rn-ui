import { Canvas, Circle } from "@shopify/react-native-skia";

export const ColorfulLoader = () => {
  const size = 128;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const canvasSize = size + 30;

  return (
    <Canvas style={{ width: canvasSize, height: canvasSize }}>
      <Circle
        cx={canvasSize / 2}
        cy={canvasSize / 2}
        r={radius}
        color="white"
        style="stroke"
        strokeWidth={strokeWidth}
      />
    </Canvas>
  );
};
