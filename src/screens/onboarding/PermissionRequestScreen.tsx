import DefaultButton from "@/src/components/buttons/DefaultButton";
import DefaultImage from "@/src/components/imageCoponents/DefaultImage";
import TypoGraphy from "@/src/components/typography/Typography";
import DefaultSaveAreaView from "@/src/components/viewComponents/DefaultSaveAreaView";
import DefaultScrollView from "@/src/components/viewComponents/DefaultScrollView";
import DefaultView from "@/src/components/viewComponents/DefaultView";
import { useBrandTheme } from "@/src/theme/hooks";
import React, { useEffect } from "react";
import { ImageSourcePropType, Platform, StyleSheet } from "react-native";
const contractImage = require("../../assets/images/onbording/contract.png");
const calenderImage = require("../../assets/images/onbording/calender.png");
import { useExpoCalender } from "@/src/permission/calender";
import { useExpoContracts } from "@/src/permission/contracts";

type PermissionRequestCardProps = {
  image: ImageSourcePropType;
  heading: string;
  description: string;
  id?: number;
};

const permissionRequestData: PermissionRequestCardProps[] = [
  {
    id: 1,
    image: calenderImage,
    heading: "Contact",
    description:
      "We need your contact to give you the ability to send workout invites ",
  },
  {
    id: 2,
    image: contractImage,
    heading: "Calender",
    description:
      "We need your calendar to give you the ability to schedule workouts. ",
  },
];
const PermissionRequestScreen = () => {
  const { requestCalendarPermission } = useExpoCalender();
  const { requestContractsPermissions } = useExpoContracts();

  useEffect(() => {
    (async () => {
      await requestCalendarPermission();
      await requestContractsPermissions();
    })();
  }, []);

  return (
    <DefaultSaveAreaView>
      <DefaultScrollView>
        <DefaultView style={styles.permissionRequestContainer}>
          <TypoGraphy headingType="h2">Permission Request</TypoGraphy>

          <DefaultView style={styles.permissionRequestContentContainer}>
            {permissionRequestData?.map((permissionRequest) => (
              <PermissionRequestCard
                key={permissionRequest?.id}
                {...permissionRequest}
              />
            ))}
          </DefaultView>
          <DefaultButton
            label="Continue"
            isLink={true}
            href={"/onboarding/connectDevice"}
          />
        </DefaultView>
      </DefaultScrollView>
    </DefaultSaveAreaView>
  );
};

const PermissionRequestCard = (props: PermissionRequestCardProps) => {
  const { image, heading, description } = props;
  const { theme } = useBrandTheme();
  return (
    <DefaultView style={styles.permissionRequestCardContainer}>
      <DefaultImage style={styles.permissionRequestCardImage} source={image} />
      <DefaultView>
        <TypoGraphy headingType="h2">{heading}</TypoGraphy>
        <TypoGraphy
          headingType="paragraph"
          style={{ color: theme.colors.neutral }}
        >
          {description}
        </TypoGraphy>
      </DefaultView>
    </DefaultView>
  );
};

const styles = StyleSheet.create({
  permissionRequestContainer: {
    width: "100%",
    height: "auto",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 61,
    paddingHorizontal: 24,
  },
  permissionRequestContentContainer: {
    paddingTop: 113,
    paddingBottom: 152,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 35,
  },
  permissionRequestCardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 14,
    paddingHorizontal: 34,
  },
  permissionRequestCardImage: {
    width: 55,
    height: 55,
    objectFit: "fill",
  },
  permissionRequestCardContentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});

export default PermissionRequestScreen;
