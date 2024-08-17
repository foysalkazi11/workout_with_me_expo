import * as Calendar from "expo-calendar";
import { Alert, Platform } from "react-native";

export const useExpoCalender = () => {
  const requestCalendarPermission = async () => {
    try {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );
        console.log("Here are all your calendars:");
        console.log({ calendars });
        // Alert.alert(
        //   "Calender Permissions Granted",
        //   "You can now access calendar"
        // );
      } else {
        showPermissionDeniedAlert();
      }
    } catch (error) {
      console.error("Calendar Permission Error:", error);
      showPermissionDeniedAlert("Calendar Permission Error:");
    }
  };

  const showPermissionDeniedAlert = (
    title: string = "Calendar Permission Denied",
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

  async function getDefaultCalendarSource() {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  }

  async function createCalendar() {
    const defaultCalendarSource =
      Platform.OS === "ios"
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: "Expo Calendar" };
    const newCalendarID = await Calendar.createCalendarAsync({
      title: "Expo Calendar",
      color: "blue",
      entityType: Calendar.EntityTypes.EVENT,
      //@ts-ignore
      sourceId: defaultCalendarSource.id,
      //@ts-ignore
      source: defaultCalendarSource,
      name: "internalCalendarName",
      ownerAccount: "personal",
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    console.log(`Your new calendar ID is: ${newCalendarID}`);
  }

  return {
    requestCalendarPermission,
    getDefaultCalendarSource,
    createCalendar,
  };
};
