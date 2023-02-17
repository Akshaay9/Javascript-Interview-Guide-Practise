const formatTime = (time) => {
    let [hour, minute] = time.split(":");
    let timeZone = "AM";
    if (hour >= 12) {
      timeZone = "PM";
    }
    if (hour > 12) {
      hour = Number(hour) - 12;
    }
    if (hour === "00") {
      hour = "12";
    }
    return `${hour}:${minute}${timeZone}`;
  };
  
  console.log(formatTime("12:33"));
  console.log(formatTime("00:33"));
  