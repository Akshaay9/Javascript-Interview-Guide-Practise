const groupBy = (values, keyFinder) => {
    return values.reduce((acc, ele) => {
      const keyFind =
        typeof keyFinder === "function" ? keyFinder(ele) : ele[keyFinder];
      if (acc[keyFind]) {
        acc = {
          ...acc,
          [keyFind]: [...acc[keyFind], ele],
        };
      } else {
        acc = {
          ...acc,
          [keyFind]: [ele],
        };
      }
      return acc;
    }, {});
  };
  
  console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
  console.log(groupBy(["one", "two", "three"], "length"));