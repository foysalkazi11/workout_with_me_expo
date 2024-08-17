import React from "react";
import { SafeAreaView } from "react-native";
type DefaultSaveAreaViewProps = SafeAreaView["props"];
const DefaultSaveAreaView = (props: DefaultSaveAreaViewProps) => {
  return <SafeAreaView {...props} />;
};

export default DefaultSaveAreaView;
