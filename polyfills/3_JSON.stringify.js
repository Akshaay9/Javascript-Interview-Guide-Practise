function stringify(data) {
    if (data === undefined) return undefined;
    if (data === null) return "null";
    if (data.toString() === "NaN") return "null";
    if (data === Infinity) return "null";
    if (data instanceof Date) {
      return `"${data.toISOString()}"`;
    }
    if (typeof data === "number") {
      return isFinite(data) ? `${data}` : `null`;
    }
    if (typeof data === "string") {
      return `"${data}"`;
    }
    if (typeof data === "object" && Array.isArray(data)) {
      return `"[${data.map((ele) => stringify(ele))}]"`;
    } else if (typeof data === "object") {
      const keys = Object.keys(data);
      const keyValuePairs = keys.map(
        (keys) => `"${keys}":${stringify(data[keys])}`
      );
      return `{${keyValuePairs.join("")}}`;
    }
  }
  
  console.log(stringify([{ name: "akshay" }]));
  