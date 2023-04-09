class getInfo {
    constructor(name, place, age) {
      this.name = name;
      this.place = place;
      this.age = age;
    }
    getInfo() {
      console.log(this.name);
      console.log(this.age);
      console.log(this.place);
    }
    get getInf() {
      console.log(this.name);
    }
    set setInfo(setName) {
      console.log(setName);
    }
  }
  
  class extendInfo extends getInfo {
    constructor(name, place, age, sex) {
      // things u wanna extend
      super(name, place, age);
      this.sex = sex;
    }
    getSex() {
      console.log(this.sex);
    }
  }
  
  const myInfo = new extendInfo("akshay", "bglore", 21, "male");
  
  myInfo.getInfo();
  
  myInfo.getSex()
  