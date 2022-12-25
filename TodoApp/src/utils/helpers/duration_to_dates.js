import { DateTime } from "luxon";
const durationToDates = (duration, customeDates = []) => {
  switch (duration) {
    case "today":
      return [
        DateTime.now().toFormat("yyyy-MM-dd"),
        DateTime.now().toFormat("yyyy-MM-dd"),
      ];
    case "yesterday":
      return [
        DateTime.now().minus({ days: 1 }).toFormat("yyyy-MM-dd"),
        DateTime.now().minus({ days: 1 }).toFormat("yyyy-MM-dd"),
      ];
    case "7_days":
      return [
        DateTime.now().minus({ days: 6 }).toFormat("yyyy-MM-dd"),
        DateTime.now().toFormat("yyyy-MM-dd"),
      ];
    case "14_days":
      return [
        DateTime.now().minus({ days: 13 }).toFormat("yyyy-MM-dd"),
        DateTime.now().toFormat("yyyy-MM-dd"),
      ];
    case "30_days":
      return [
        DateTime.now().minus({ days: 29 }).toFormat("yyyy-MM-dd"),
        DateTime.now().toFormat("yyyy-MM-dd"),
      ];
    case "custom":
      if (customeDates.length > 0 && customeDates[0]) {
        return [
          DateTime.fromISO(customeDates[0]).toFormat("yyyy-MM-dd"),
          DateTime.fromISO(customeDates[1]).toFormat("yyyy-MM-dd"),
        ];
      } else {
        return [];
      }
    default:
      return [null, null];
  }
};

export default durationToDates;
