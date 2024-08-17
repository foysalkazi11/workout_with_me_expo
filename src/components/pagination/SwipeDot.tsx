import React from "react";
import DefaultView from "../viewComponents/DefaultView";
import { Animated, StyleSheet } from "react-native";
import { useBrandTheme } from "@/src/theme/hooks";

type SwipeDotType = {
  data: any[];
  activeIndex: number;
};
export default function SwipeDot({ data, activeIndex }: SwipeDotType) {
  const { theme } = useBrandTheme();
  const styles = StyleSheet.create({
    dotsContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 22,
    },
    dot: {
      width: 10,
      height: 10,
      backgroundColor: theme.colors.primary,
      borderRadius: 50,
      opacity: 0.4,
    },
    dotActive: {
      width: 16,
      height: 16,
      opacity: 1,
    },
  });
  return (
    <DefaultView style={[styles.dotsContainer]}>
      {data?.map((_, i) => {
        return (
          <Animated.View
            style={[styles.dot, i === activeIndex && styles.dotActive]}
            key={i.toString()}
          />
        );
      })}
    </DefaultView>
  );
}
