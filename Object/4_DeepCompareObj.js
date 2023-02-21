const compareObj = (obj1, obj2) => {
  const obj1Len = Object.keys(obj1);
  const obj2Len = Object.keys(obj2);

  if (obj1Len.length !== obj2Len.length) {
    return false;
  }

  for (let key in obj1) {
    const valOne = obj1[key];
    const valTwo = obj2[key];

    const areBothObj =
      valOne &&
      typeof valOne === "object" &&
      valTwo &&
      typeof valTwo === "object";

    if (areBothObj && !compareObj(valOne, valTwo)) {
      return false;
    } else if (!areBothObj && valOne !== valTwo) {
      return false;
    }
  }
  return true;
};

const obj1 = {
  name: "learnersbucket",
  details: {
    x: [1, 2],
    y: 2,
  },
};
const obj2 = {
  name: "learnersbucket",
  details: {
    y: 2,
    x: [1, 2],
  },
};
