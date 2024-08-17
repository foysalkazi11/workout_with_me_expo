import React from "react";
import { Image } from "react-native";

type DefaultImageProps = Image["props"];

const DefaultImage = (props: DefaultImageProps) => {
  return <Image {...props} />;
};

export default DefaultImage;
