const twelveTo24hrs = (time) => {
    let [hours, minute] = time.split(":");
    const timeZone = minute.substring(minute.length - 2, minute.length);
  
    if (timeZone === "AM") {
      if (hours === "12") {
        hours = "00";
      }
    }
    if (timeZone === "PM") {
      if (hours > "12") {
        hours = Number(hours) + 12;
      }
    }
    minute = minute.slice(0, -2);
    return `${hours}:${minute}`;
  };
  
  console.log(twelveTo24hrs("12:10AM"));
  console.log(twelveTo24hrs("01:33PM"));
  