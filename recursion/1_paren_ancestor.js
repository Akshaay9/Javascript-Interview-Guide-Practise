const arr = [
    ["lion", "cat"],
    ["cat", "mammal"],
    ["dog", "mammal"],
    ["mammal", "animal"],
    ["fish", "animal"],
    ["shark", "fish"],
  ];
  
  const covertToOnj = (arr) => {
    let result = {};
    for (let animal of arr) {
      const [key, value] = animal;
      result[key] = value;
    }
    return result;
  };
  
  const result = covertToOnj(arr);
  
  const entityRelation = (obj, key) => {
    const val = obj[key];
  
    if (obj.hasOwnProperty(val)) {
      return entityRelation(obj, val) + "->" + key;
    } else {
      return val + "->" + key;
    }
  };
  
  const convertRelation = (result) => {
    const finalResult = [];
    for (let key in result) {
      finalResult.push(entityRelation(result, key));
    }
    return finalResult;
  };
  
  const a = convertRelation(result);
  console.log(a);


  //or//
  
  const entityRelation = (arr) => {
    const aggregate = (arr) => {
      return arr.reduce((acc, ele) => {
        const [key, value] = ele;
        acc[key] = value;
        return acc;
      }, {});
    };
  
    const recursive = (obj, key) => {
      const val = obj[key];
  
      if (val in obj) {
        return recursive(obj, val) + "->" + key;
      } else {
        return val + "->" + key;
      }
    };
  
    const segregate = (obj) => {
      return Object.keys(obj).reduce((acc, ele) => {
        acc.push(recursive(obj, ele));
        return acc;
      }, []);
    };
  
    const obj = aggregate(arr);
  
    return segregate(obj);
  };
  
  const arr = [
    ["lion", "cat"],
    ["cat", "mammal"],
    ["dog", "mammal"],
    ["mammal", "animal"],
    ["fish", "animal"],
    ["shark", "fish"],
  ];
  
  console.log(entityRelation(arr));
  