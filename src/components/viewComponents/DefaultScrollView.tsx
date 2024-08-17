import React from "react";
import { ScrollView } from "react-native";
type ScrollViewType = ScrollView["props"];
const DefaultScrollView = (props: ScrollViewType) => {
  return <ScrollView {...props} />;
};

export default DefaultScrollView;
