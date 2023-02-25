const familyTree = {
    name: "Ramasamy",
    spouse: "Muthulakshmi",
    children: [
      {
        name: "Ragupathy",
        spouse: "Vanishree",
        children: [
          {
            name: "Sruthi",
            spouse: "",
            children: [],
          },
          {
            name: "Sriman",
            spouse: "",
            children: [],
          },
        ],
      },
    ],
  };
  
  const recursion = (obj) => {
    const result = [];
  
    const printChildren = (object) => {
      for (let key in object) {
        if (key === "children" && object["children"].length == 0) {
          result.push(object.name);
        }
        if (key === "children") {
          object.children.forEach((ele) => {
            printChildren(ele);
          });
        }
      }
    };
  
    printChildren(obj);
  
    return result;
  };
  console.log(recursion(familyTree));
  