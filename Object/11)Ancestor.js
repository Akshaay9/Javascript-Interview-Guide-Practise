var peopleTree = {
    sandeep: "shashi",
    nanha: "shashi",
    harish: "nanha",
    divya: "harish",
    arjun: "sandeep",
    shashi: "vinoj",
    vishal: "divya",
  };
  
  const getAnsestor = (peopleTree, person) => {
    const result = [];
    const stack = [];
  
    stack.push(person);
  
    while (stack.length !== 0) {
      const firstEle = stack.shift();
      result.push(firstEle);
      const ancestor = peopleTree[firstEle];
      if (ancestor) {
        stack.push(ancestor);
      }
    }
  
    return result;
  };
  
  console.log(getAnsestor(peopleTree, "sandeep"));
  