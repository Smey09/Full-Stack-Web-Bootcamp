// 4. A company has a list of employees and their salary in separate arrays...
const employees = ["Lara", "Evee", "Simi"];
const salaries = [1000, 2000, 120.9];
const employeeSalaries = {};

if (employees.length === salaries.length) {
  for (let i = 0; i < employees.length; i++) {
    employeeSalaries[employees[i]] = salaries[i];
  }
} else {
  console.log("empployees != salaries");
}

console.log(employeeSalaries);
