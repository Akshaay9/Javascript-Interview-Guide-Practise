const getSalary = (person) => person.salary; /// it returned 10000
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - grossSalary * 0.3;
const val = { salary: 10000 };

const pipe = (...fns) => {
  return (val) => {
    for (let fn of fns) {
      val = fn(val);
    }
    return val;
  };
};

const result = pipe(getSalary, addBonus, deductTax)({ salary: 10000 });
console.log(result);
