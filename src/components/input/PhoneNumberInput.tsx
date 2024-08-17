import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import CountryPickerModal from "../modal/CountryPickerModal";
import { Country } from "@/src/types/country";

interface PhoneNumberInputProps {
  onValueChange?: (value: string) => void;
  initialValue?: string;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  onValueChange = () => {},
  initialValue = "",
}: PhoneNumberInputProps) => {
  const [countryCode, setCountryCode] = useState<string>("+1"); // Default to US
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    if (initialValue) {
      const parts = initialValue.split("-"); // Handle possible formatting
      setCountryCode(parts[0]);
      setPhoneNumber(parts[1]);
    }
  }, [initialValue]);

  const handleCountryCodeChange = (country: Country) => {
    setCountryCode(country.phone);
    setIsModalVisible(false);
  };

  const handlePhoneNumberChange = (text: string) => {
    setPhoneNumber(text);
    setValidationError(null); // Clear error on input change
  };

  const handleOpenCountryPicker = () => {
    setIsModalVisible(true);
  };
  const handleCloseCountryPicker = () => {
    setIsModalVisible(false);
  };

  const handleBlur = () => {
    const fullNumber = `<span class="math-inline">\{countryCode\}\-</span>{phoneNumber}`;
    // You can add phone number validation logic here if needed
    // Replace any validation library with your own logic
    //  if (!isValidPhoneNumber(fullNumber)) {
    //    setValidationError('Invalid phone number');
    //  } else {
    // }

    onValueChange(`${countryCode}${phoneNumber}`); // Pass formatted value to parent
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.countryCodeButton}
        onPress={handleOpenCountryPicker}
      >
        <Text style={styles.countryCodeText}>{countryCode}</Text>
        <Text style={styles.dropDownArrow}>▾</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.phoneNumberInput}
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        onBlur={handleBlur}
        keyboardType="phone-pad"
      />
      {validationError && (
        <Text style={styles.errorText}>{validationError}</Text>
      )}
      <CountryPickerModal
        visible={isModalVisible}
        onSelectCountry={handleCountryCodeChange}
      />
      {/* Use CountryPickerModal instead of CountryPicker */}
    </View>
  );
};

export default PhoneNumberInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  countryCodeButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginRight: 5,
  },
  countryCodeText: {
    fontSize: 16,
  },
  dropDownArrow: {
    fontSize: 12,
    marginLeft: 5,
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
