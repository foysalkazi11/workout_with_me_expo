import { Link, LinkProps } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import DefaultImage from "../imageCoponents/DefaultImage";
const logoRound = require("../../assets/images/logo/WWM_logo_rd.png");

type LogoWithRedirectLink = {
  href?: "StaticRoutes | RelativePathString | `${string}:${string}`";
};
const LogoWithRedirectLink = (props: LogoWithRedirectLink) => {
  const { href = "/" } = props;
  return (
    <Link href={href} asChild>
      <Pressable>
        <DefaultImage source={logoRound} />
      </Pressable>
    </Link>
  );
};

export default LogoWithRedirectLink;
