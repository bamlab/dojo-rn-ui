import { Canvas, Path, Skia } from "@shopify/react-native-skia";
import { useMemo } from "react";

export const ColorfulLoader = () => {
  const size = 128;
  const strokeWidth = 15;
  const radius = (size - strokeWidth) / 2;
  const canvasSize = size + 30;

  const circle = useMemo(() => {
    const skPath = Skia.Path.Make();
    skPath.addCircle(canvasSize / 2, canvasSize / 2, radius);
    return skPath;
  }, [canvasSize, radius]);

  return (
    <Canvas style={{ width: canvasSize, height: canvasSize }}>
      <Path
        path={circle}
        color="#6370CA"
        style="stroke"
        strokeWidth={strokeWidth}
        start={0.6}
        end={1}
        strokeCap="round"
      />
    </Canvas>
  );
};
