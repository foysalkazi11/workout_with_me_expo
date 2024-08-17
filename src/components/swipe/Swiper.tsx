import React, { useRef } from "react";
import { Animated, FlatList, ViewToken } from "react-native";

type SwiperPorps = FlatList["props"] & {
  setCurrentIndex?: (index: number) => void;
};
const Swiper = React.forwardRef<FlatList, SwiperPorps>((props, ref) => {
  const { setCurrentIndex = () => {}, ...rest } = props;
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(viewableItems[0]?.index as number);
    }
  ).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  //   const sliderRef: React.LegacyRef<FlatList<any>> | undefined = useRef(null);
  // const scrollTo = (params: {
  //   index: number;
  //   animated?: boolean;
  //   viewOffset?: number;
  //   viewPosition?: number;
  // }) => {
  //   if (sliderRef.current) sliderRef.current.scrollToIndex(params);
  // };
  return (
    <FlatList
      {...rest}
      // keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      pagingEnabled
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={viewConfig}
      scrollEventThrottle={32}
      ref={ref}
    />
  );
});

export default Swiper;
