const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const employeeNumber = Number(lines.shift());
const employeeHours = Number(lines.shift());
const employeeSalaryHours = Number(lines.shift());

const infosEmployee = employeeHours * employeeSalaryHours 

console.log(`NUMBER = ${employeeNumber}`)
console.log(`SALARY = U$ ${infosEmployee.toFixed(2)}`)
