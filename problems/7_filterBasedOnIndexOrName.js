const arr = [
    { name: "Amir", id: "1" },
    { name: "Samlan", id: "2" },
    { name: "Shahrukh", id: "0" },
  ];
  
  const filterBasedOnStringOrIndex = (arr, val) => {
    return arr.filter((ele, idx) => {
      if (typeof val === "number" && val === idx) {
        return ele;
      } else if (typeof val === "string" && ele.name === val) {
        return ele;
      }
    });
  };
  
  console.log(filterBasedOnStringOrIndex(arr, 0));
  console.log(filterBasedOnStringOrIndex(arr, "Samlan"));
  