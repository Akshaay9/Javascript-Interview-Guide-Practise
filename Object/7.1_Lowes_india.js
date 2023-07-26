var arr = [
    { id: 1, value: ["bob", "Molly"] },
    { id: 2, value: ["Jon", "Bony"] },
    { id: 1, value: ["Akshay", "Pa1"] },
    { id: 4, value: [] },
    { id: 5 },
  ];
  
  const segreateValues = (obj) => {
    return arr.reduce((acc, ele) => {
      const { id, value } = ele;
      if (acc[id]) {
        acc[id].value.push(...value);
      } else if (value && value.length > 0) {
        acc[id] = {
          ...acc[id],
          value: [...value],
        };
        // acc = {
        //   ...acc,
        //   [id]: {
        //     value: [...value],
        //   },
        // };
      }
  
      return acc;
    }, {});
  };
  console.log(segreateValues(arr));
  
  // Output:
  
  // {
  //  1: {value:  ['bob', 'Molly’, 'Pa1', 'Akshay']}
  
  //  2: {value: ['Jon', ‘Bony’]}
  
  // }
  