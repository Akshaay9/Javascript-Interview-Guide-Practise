const splitString = (str, delimiter) => {
  const result = [];
  if (delimiter === "") {
    return Array.from(str);
  }
  if (!delimiter) return "";

  const recurseiveDelimeter = (str) => {
    const idxOf = str.indexOf(delimiter);
    if (idxOf > 0) {
      result.push(str.substring(0, idxOf));
      recurseiveDelimeter(str.substring(idxOf + delimiter.length, str.length));
    } else {
      result.push(str);
    }
  };

  recurseiveDelimeter(str, 0);
  return result;
};
console.log(splitString("hey how are u doing are you okay?", "are"));