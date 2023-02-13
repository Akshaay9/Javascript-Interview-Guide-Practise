function Calculator() {
    this.total = 0;
    this.add = function (val) {
      this.total += val;
      return this;
    };
    this.subtract = function (val) {
      this.total -= val;
      return this;
    };
    this.divide = function (val) {
      this.total = Math.floor(this.total / val);
      return this;
    };
    this.multiply = function (val) {
      this.total = this.total * val;
      return this;
    };
  }
  
  const calculator = new Calculator();
  calculator.add(10).subtract(2).divide(2).multiply(5);
  console.log(calculator.total);
  