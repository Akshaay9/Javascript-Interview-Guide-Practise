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
      return (
        "{" +
        Object.entries(data).reduce((acc, [key, value]) => {
          return [...acc, stringify(key) + ":" + stringify(value)].join(",");
        }, []) +
        "}"
      );
    }
  }
  
  console.log(stringify([{ name: "akshay" }]));
  