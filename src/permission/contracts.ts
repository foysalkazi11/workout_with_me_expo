import * as Contacts from "expo-contacts";
import { Alert } from "react-native";
export const useExpoContracts = () => {
  const requestContractsPermissions = async () => {
    try {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const contact = data[0];
          console.log(contact);
          // Alert.alert(
          //   "Permissions Granted",
          //   "You can now access calendar and contacts"
          // );
        }
      } else {
        showPermissionDeniedAlert();
      }
    } catch (error) {
      console.log("Contract Permission Error", error);
      showPermissionDeniedAlert("Contract Permission Error");
    }
  };

  const showPermissionDeniedAlert = (
    title: string = "Contract Permission Denied",
    description: string = "Please enable permissions to continue."
  ) => {
    Alert.alert(title, description, [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("Ok Pressed") },
    ]);
  };

  return { requestContractsPermissions };
};
