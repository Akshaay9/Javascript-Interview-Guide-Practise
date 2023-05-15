class List {
    constructor(val) {
      this.next = null;
      this.val = val;
    }
  }
  
  const item1 = new List(10);
  const item2 = new List(20);
  const item3 = new List(30);
  
  item1.next = item2;
  item2.next = item3;
  item3.next = item1;
  
  const deleteCircularDependency = (obj) => {
    const map = new WeakSet([obj]);
  
    const recurse = (object) => {
      for (let key in object) {
        if (object.hasOwnProperty(key) && typeof object[key] === "object") {
          if (map.has(object[key])) {
            delete object[key];
          } else {
            map.add(object[key]);
            recurse(object[key]);
          }
        }
      }
    };
  
    recurse(obj);
  
    return obj;
  };
  
  console.log(deleteCircularDependency(item1));
  