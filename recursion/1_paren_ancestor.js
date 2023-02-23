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