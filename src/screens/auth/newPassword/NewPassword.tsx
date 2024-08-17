import DefaultButton from "@/src/components/buttons/DefaultButton";
import InputWithIcon from "@/src/components/input/InputWithIcon";
import TypoGraphy from "@/src/components/typography/Typography";
import DefaultSaveAreaView from "@/src/components/viewComponents/DefaultSaveAreaView";
import DefaultScrollView from "@/src/components/viewComponents/DefaultScrollView";
import DefaultView from "@/src/components/viewComponents/DefaultView";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LogoWithRedirectLink from "@/src/components/logo/LogoWithRedirectLink";

const NewPasswordComponent = () => {
  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmShowPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <DefaultSaveAreaView>
      <DefaultScrollView>
        <DefaultView style={styles.verifyCodeContainer}>
          <LogoWithRedirectLink />
          <DefaultView style={styles.verifyCodeText}>
            <TypoGraphy headingType="h1">Verify Code</TypoGraphy>
          </DefaultView>
          <TypoGraphy headingType="bodyGray">
            Your new password must be different
          </TypoGraphy>
          <TypoGraphy headingType="bodyGray">
            form previously used passwords.
          </TypoGraphy>

          <DefaultView style={styles.verifyCodeInputContainer}>
            <InputWithIcon
              // Set secureTextEntry prop to hide
              //password when showPassword is false
              placeholder="Password"
              secureTextEntry={!showPassword}
              icon={
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={16}
                  color="black"
                  onPress={toggleShowPassword}
                />
              }
            />
            <InputWithIcon
              // Set secureTextEntry prop to hide
              //password when showPassword is false
              placeholder="Confirm Password"
              secureTextEntry={!showConfirmPassword}
              icon={
                <Ionicons
                  name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                  size={16}
                  color="black"
                  onPress={toggleConfirmShowPassword}
                />
              }
            />
          </DefaultView>

          <DefaultButton
            label="Create New Password"
            size="md"
            style={styles.verifyBtn}
          />
        </DefaultView>
      </DefaultScrollView>
    </DefaultSaveAreaView>
  );
};

const styles = StyleSheet.create({
  verifyCodeContainer: {
    width: "100%",
    height: "auto",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 24,
    paddingLeft: 45,
    paddingRight: 45,
    paddingBottom: 96,
  },
  verifyCodeText: {
    paddingTop: 80,
    paddingBottom: 17,
  },
  verifyCodeInputContainer: {
    paddingTop: 47,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  emailInput: {
    marginBottom: 40,
  },
  verifyBtn: {
    marginTop: 66,
    marginBottom: 63,
  },
});

export default NewPasswordComponent;
