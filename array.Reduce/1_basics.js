const addNum = (arr) => {
    return arr.reduce((acc, ele) => {
      return (acc += ele);
    }, 0);
  };
  
  console.log(addNum([1, 2, 3, 4, 5, 6, 7]));
  
  const oddEvenSegregate = (arr) => {
    return arr.reduce(
      (acc, ele) => {
        if (ele % 2 === 0) {
          // acc.even.push(ele);
          return {
            ...acc,
            even: [...acc.even, ele],
          };
        } else {
          // acc.odd.push(ele);
          return {
            ...acc,
            odd: [...acc.odd, ele],
          };
        }
        return acc;
      },
      { odd: [], even: [] }
    );
  };
  
  console.log(oddEvenSegregate([1, 2, 3, 4, 5, 6, 7]));
  
  const oddEvenAdd = (arr) => {
    return arr.reduce((acc, ele) => {
      if (ele % 2 === 0) {
        return {
          ...acc,
          even: (acc.even || 0) + ele,
        };
      } else {
        return {
          ...acc,
          odd: (acc.odd || 0) + ele,
        };
      }
    }, {});
  };
  
  console.log(oddEvenAdd([1, 2, 3, 4, 5, 6, 7]));
  