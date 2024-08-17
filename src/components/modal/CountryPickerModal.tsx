import React, { useMemo, useState } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import DefaultTextInput from "../input/DefaultTextInput";
import { Country } from "@/src/types/country";
import TypoGraphy from "../typography/Typography";
import { useBrandTheme } from "@/src/theme/hooks";

const countryCodeData: {
  countries: Country[];
} = require("../../constants/countryCode.json");

const CountryPickerModal: React.FC<{
  onSelectCountry: (country: Country) => void;
  visible: boolean;
  onRequestClose?: () => void;
}> = ({ onSelectCountry, visible, onRequestClose = () => {} }) => {
  const { theme } = useBrandTheme();
  const [searchInput, setSearchInput] = useState("");
  const handleCountrySelection = (country: Country) => {
    onSelectCountry(country);
    setSearchInput("");
  };

  const filteredCountryCodeData = useMemo(() => {
    return countryCodeData.countries.filter((item) => {
      const itemName = item.name.toLowerCase();

      const itemCode = item.phone.toLowerCase();

      const textData = searchInput.toLowerCase();

      if (itemName.indexOf(textData) > -1 || itemCode.indexOf(textData) > -1)
        return true;
    });
  }, [searchInput]);

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    countryListContainer: {
      width: "100%",
      paddingTop: 10,
      paddingRight: 5,
    },
    closeButton: {
      position: "absolute",
      top: 10,
      right: 10,
      padding: 10,
      backgroundColor: theme.colors.backgroundLight,
      borderRadius: 5,
    },
    closeText: {
      fontSize: 16,
    },
    countryItem: {
      padding: 10,
      borderWidth: 1,
      borderColor: theme.colors.accent2,
      marginVertical: 5,
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      gap: 10,
    },
    countryText: {
      fontSize: 16,
    },
  });

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalContainer}>
        <DefaultTextInput
          value={searchInput}
          onChangeText={setSearchInput}
          placeholder="Search by counter or code"
          variant="contain"
          style={{ height: 38, paddingHorizontal: 10 }}
        />
        <FlatList
          style={[styles.countryListContainer]}
          data={filteredCountryCodeData}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.phone}
              onPress={() => handleCountrySelection(item)}
              style={styles.countryItem}
            >
              <TypoGraphy headingType="paragraph">{item.emoji}</TypoGraphy>
              <TypoGraphy
                headingType="paragraph"
                style={{ color: theme.colors.black }}
              >
                {item.phone}
              </TypoGraphy>
              <TypoGraphy
                headingType="paragraph"
                style={{ color: theme.colors.black }}
              >
                {item.name}
              </TypoGraphy>
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
};

export default CountryPickerModal;
