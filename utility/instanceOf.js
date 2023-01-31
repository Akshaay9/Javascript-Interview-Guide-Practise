// Need tp keep checking in __proto__ of it is equal to prototype 

function D() {}
function E() {}

const a = new D();

// Sounrce -> DunDer Proto
//Target->Prototype


// LOOPING WHILE
const customInstanceOf = (source, target) => {
  if (source === null || typeof source !== "object") return false;

  while (source) {
    if (source.__proto__ === target.prototype) {
      return true;
    } else {
      source = source.__proto__;
    }
  }
  return false;
};

// RECURSION
const customInstanceOf1 = (source, target) => {
  if (source === null || typeof source !== "object") return false;

  if (source.__proto__ === target.prototype) {
    return true;
  }
  return customInstanceOf1(source.__proto__, target);
};

console.log(customInstanceOf(a, D)); // true
console.log(customInstanceOf(a, E)); // false
console.log(customInstanceOf(a, Object)); // true
