import DefaultButton from "@/src/components/buttons/DefaultButton";
import DefaultImage from "@/src/components/imageCoponents/DefaultImage";
import TypoGraphy from "@/src/components/typography/Typography";
import DefaultSaveAreaView from "@/src/components/viewComponents/DefaultSaveAreaView";
import DefaultScrollView from "@/src/components/viewComponents/DefaultScrollView";
import DefaultView from "@/src/components/viewComponents/DefaultView";
import { useBrandTheme } from "@/src/theme/hooks";
import React, { useState } from "react";
import { ImageSourcePropType, StyleSheet, Switch } from "react-native";
const fitbitDevice = require("../../assets/images/onbording/fitbit.png");
const appleWatchDevice = require("../../assets/images/onbording/apple_watch.png");
const samsungDevice = require("../../assets/images/onbording/samsung.png");
const garminDevice = require("../../assets/images/onbording/Garmin.png");

const ConnectDeviceScreen = () => {
  return (
    <DefaultSaveAreaView>
      <DefaultScrollView>
        <DefaultView style={styles.connectDeviceContainer}>
          <TypoGraphy headingType="h2" style={styles.connectDeviceHeading}>
            Connect Device
          </TypoGraphy>
          <TypoGraphy headingType="bodyGray">
            Sync wearables directly to Workout With Me on TV screen display.
          </TypoGraphy>
          <DefaultView style={styles.connectDeviceCardContainer}>
            <ConnectDeviceCard isConnectionEnabled={true} logo={fitbitDevice} />
            <ConnectDeviceCard
              isConnectionEnabled={true}
              logo={appleWatchDevice}
            />
            <ConnectDeviceCard
              isConnectionEnabled={false}
              logo={samsungDevice}
            />
            <ConnectDeviceCard
              isConnectionEnabled={false}
              logo={garminDevice}
            />
          </DefaultView>
          <DefaultButton label="Continue" size="md" />
        </DefaultView>
      </DefaultScrollView>
    </DefaultSaveAreaView>
  );
};

type ConnectDeviceCardProps = {
  logo: ImageSourcePropType | undefined;
  isConnectionEnabled: boolean;
};

const ConnectDeviceCard = ({
  isConnectionEnabled = false,
  logo,
}: ConnectDeviceCardProps) => {
  const [isEnabled, setIsEnabled] = useState(isConnectionEnabled);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { theme } = useBrandTheme();
  return (
    <DefaultView
      style={[
        styles.connectDeviceCardContentContainer,
        { borderColor: theme.colors.backgroundLight },
      ]}
    >
      <DefaultImage source={logo} />
      <Switch
        trackColor={{ false: theme.colors.accent2, true: theme.colors.primary }}
        thumbColor={theme.colors.background}
        ios_backgroundColor={theme.colors.accent2}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </DefaultView>
  );
};

const styles = StyleSheet.create({
  connectDeviceContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 61,
  },
  connectDeviceHeading: {
    paddingBottom: 6,
  },
  connectDeviceCardContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
    paddingTop: 38,
    paddingBottom: 76,
  },
  connectDeviceCardContentContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 6,
  },
});

export default ConnectDeviceScreen;
