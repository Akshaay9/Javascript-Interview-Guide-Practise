Function.prototype.myBind = function (obj) {
    let conextFun = this;
    obj.myFUn = conextFun;
    return function (...args) {
      obj.myFUn(...args);
      // or;
      // conextFun.call(obj, ...args);
    };
  };
  
  const pokemonObj = {
    name: "akshay",
    place: "banglore",
    getName: function () {
      console.log(this.name);
      console.log(this.place);
    },
  };
  
  function getnamePlace(age) {
    this.getName();
    console.log("2", age);
    console.log("3", this.name);
    console.log("4", this.place);
  }
  
  const bindFun = getnamePlace.myBind(pokemonObj);
  bindFun(21);
  