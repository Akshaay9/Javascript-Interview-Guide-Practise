function ComputeAmount() {
    this.amount = 0;
    this.thousandVal = 1000;
    this.lakhsVal = 100000;
    this.croresVal = 10000000;
    this.lacs = function (val) {
      this.amount += this.lakhsVal * val;
      return this;
    };
    this.crore = function (val) {
      this.amount += this.croresVal * val;
      return this;
    };
    this.thousand = function (val) {
      this.amount += this.thousandVal * val;
      return this;
    };
    this.value = function (val) {
      return this.amount;
    };
  }
  
  const a = new ComputeAmount()
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value();
  
  console.log(a);
  