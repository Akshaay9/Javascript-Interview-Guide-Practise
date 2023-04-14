Function.prototype.myCall = function (obj, ...args) {
    const contextFun = this;
    obj.myFun = contextFun;
    obj.myFun(...args);
  };
  
  const pokemonObj = {
    name: "akshay",
    place: "banglore",
    getName: function () {
      console.log(this.name);
      console.log(this.place);
    },
  };
  
  function getnamePlace(age, area) {
    this.getName();
    console.log("2", age);
    console.log("3", this.name);
    console.log("4", this.place);
    console.log("5", area);
  }
  
  getnamePlace.myCall(pokemonObj, 21, "Dasarahalli");
  