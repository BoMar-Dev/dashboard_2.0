export  const translateWeekdayToSwedish = (weekday) => {
    switch (weekday) {
      case "Monday":
        return "Måndag";
      case "Tuesday":
        return "Tisdag";
      case "Wednesday":
        return "Onsdag";
      case "Thursday":
        return "Torsdag";
      case "Friday":
        return "Fredag";
      default:
        return weekday;
    }
  };


  export  const translateMonthToSwedish = (date) => {
    switch (date) {
      case "May":
        return "Maj";
      case "October":
        return "Oktober";
      default:
        return date;
    }
  };


