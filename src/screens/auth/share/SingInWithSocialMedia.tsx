import DefaultImage from "@/src/components/imageCoponents/DefaultImage";
import DefaultView, {
  DefaultViewProps,
} from "@/src/components/viewComponents/DefaultView";
import React from "react";
import { StyleSheet } from "react-native";
const facebook = require("../../../assets/images/social_icons/social_icon_facebook.png");
const google = require("../../../assets/images/social_icons/social_icon_google.png");
const twitter = require("../../../assets/images/social_icons/social_icon_twitter.png");
const SingInWithSocialMedia = (props: DefaultViewProps) => {
  const { style } = props;
  return (
    <DefaultView
      {...props}
      style={[styles.singInWithSocialMediaContainer, style]}
    >
      <DefaultImage source={google} />
      <DefaultImage source={facebook} />
      <DefaultImage source={twitter} />
    </DefaultView>
  );
};

const styles = StyleSheet.create({
  singInWithSocialMediaContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 15,
  },
});

export default SingInWithSocialMedia;
