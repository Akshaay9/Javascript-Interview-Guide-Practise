function HashSet() {
    this.list = {};
  
    this.set = function (key, value) {
      this.list[key] = value;
    };
  
    this.get = function (key) {
      return this.list[key];
    };
  
    this.has = function (key) {
      return Boolean(this.list[key]);
    };
    this.all = function () {
      return this.list;
    };
    this.deleteVal = function (key) {
      delete this.list[key];
      return this.list;
    };
  }
  
  const store = new HashSet();
  store.set("a", 1);
  store.set("b", 1);
  
  console.log(store.all()); // { a: 1, b: 1 }
  console.log(store.get("a")); //1
  console.log(store.has("c")); // false
  console.log(store.deleteVal("a")); // {"b":1}
  