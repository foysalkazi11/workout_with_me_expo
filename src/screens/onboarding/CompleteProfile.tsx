import DefaultButton from "@/src/components/buttons/DefaultButton";
import IconButton from "@/src/components/buttons/IconButton";
import DefaultImage from "@/src/components/imageCoponents/DefaultImage";
import DefaultTextInput from "@/src/components/input/DefaultTextInput";
import InputWithIcon from "@/src/components/input/InputWithIcon";
import CountryPickerModal from "@/src/components/modal/CountryPickerModal";
import TypoGraphy from "@/src/components/typography/Typography";
import DefaultSaveAreaView from "@/src/components/viewComponents/DefaultSaveAreaView";
import DefaultScrollView from "@/src/components/viewComponents/DefaultScrollView";
import DefaultView from "@/src/components/viewComponents/DefaultView";
import { useBrandTheme } from "@/src/theme/hooks";
import { Country } from "@/src/types/country";
import { FontAwesome, Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
const completeProfileLogo = require("../../assets/images/onbording/complate_profile_logo.png");
const completeProfileExampleAvatar = require("../../assets/images/onbording/onbording_example_avater.png");

type UserInfoType = {
  name: string;
  location: string;
  phoneNumber: string;
  countryCode: string;
};
const CompleteProfileScreen = () => {
  const { theme } = useBrandTheme();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    countryCode: "+1",
    location: "",
    name: "",
    phoneNumber: "",
  });

  const handleInputChange = (name: keyof UserInfoType, value: string) => {
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleOpenCountryCodePicker = () => {
    setIsModalVisible(true);
  };

  const handleCountryCodeChange = (country: Country) => {
    setUserInfo((prev) => ({
      ...prev,
      countryCode: country.phone,
      location: country.name,
    }));
    // setCountryCode(country.phone);
    setIsModalVisible(false);
  };

  const styles = StyleSheet.create({
    completeProfileContainer: {
      width: "100%",
      height: "auto",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 42,
      paddingHorizontal: 24,
    },
    completeProfileText: {
      paddingTop: 22,
      paddingBottom: 32,
    },
    userAvatarContainer: {
      width: 109,
      height: 109,
      borderRadius: 50,
      position: "relative",
    },
    userAvatarEdit: {
      width: 20,
      height: 20,
      position: "absolute",
      top: "60%",
      right: -5,
    },
    useInfoInputContainer: {
      width: "100%",
      paddingTop: 47,
      paddingBottom: 65,
      gap: 17,
    },
    inputBoxWithName: {
      gap: 6,
    },
    input: {
      paddingHorizontal: 14,
      height: 38,
    },
    countryCodeButton: {
      flexDirection: "row",
      alignItems: "center",
      paddingRight: 10,
      gap: 5,
      borderRightColor: theme.colors.neutral,
      borderRightWidth: 1,
      marginRight: 10,
    },
  });

  return (
    <DefaultSaveAreaView>
      <DefaultScrollView>
        <DefaultView style={styles.completeProfileContainer}>
          <DefaultImage source={completeProfileLogo} />
          <TypoGraphy headingType="h1" style={styles.completeProfileText}>
            Complete Profile
          </TypoGraphy>
          <DefaultView style={styles.userAvatarContainer}>
            <DefaultImage source={completeProfileExampleAvatar} />
            <IconButton
              style={styles.userAvatarEdit}
              size="sm"
              icon={<Octicons name="pencil" size={12} color="black" />}
            />
          </DefaultView>
          <DefaultView style={styles.useInfoInputContainer}>
            <DefaultView style={styles.inputBoxWithName}>
              <TypoGraphy headingType="body">Name</TypoGraphy>
              <DefaultTextInput
                style={styles.input}
                variant="contain"
                placeholder="Mary Smith"
                value={userInfo.name}
                onChangeText={(value) => handleInputChange("name", value)}
              />
            </DefaultView>
            <DefaultView style={styles.inputBoxWithName}>
              <TypoGraphy headingType="body">Phone Number</TypoGraphy>
              <InputWithIcon
                style={styles.input}
                variant="contain"
                placeholder="Enter a phone number"
                keyboardType="number-pad"
                placeMent="left"
                value={userInfo.phoneNumber}
                onChangeText={(value) =>
                  handleInputChange("phoneNumber", value)
                }
                icon={
                  <TouchableOpacity
                    style={styles.countryCodeButton}
                    onPress={handleOpenCountryCodePicker}
                  >
                    <TypoGraphy headingType="bodyGray">
                      {userInfo?.countryCode}
                    </TypoGraphy>
                    <FontAwesome
                      name="angle-down"
                      size={16}
                      color={theme.colors.neutral}
                    />
                  </TouchableOpacity>
                }
              />
            </DefaultView>
            <DefaultView style={styles.inputBoxWithName}>
              <TypoGraphy headingType="body">Location</TypoGraphy>
              <DefaultTextInput
                style={styles.input}
                variant="contain"
                placeholder="United States of America"
                value={userInfo.location}
                onChangeText={(value) => handleInputChange("location", value)}
              />
            </DefaultView>
          </DefaultView>
          <DefaultButton
            label="Next"
            size="lg"
            isLink={true}
            href={"/onboarding/permissionRequest/"}
          />
          <CountryPickerModal
            visible={isModalVisible}
            onSelectCountry={handleCountryCodeChange}
          />
        </DefaultView>
      </DefaultScrollView>
    </DefaultSaveAreaView>
  );
};

export default CompleteProfileScreen;
