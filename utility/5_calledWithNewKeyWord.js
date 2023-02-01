// Chek if function is called using new keyworrk
// 1) this instanceOf argument.callee
// 2) using new.target

function Test() {
    if (new.target) {
      console.log("called");
    }
    if (this instanceof arguments.callee) {
      console.log("Again True");
    }
  }
  
  new Test(); // true
  Test(); // false
  