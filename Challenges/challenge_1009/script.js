const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const vendorName = Number(lines.shift());
const salary = Number(lines.shift());
const totalSales = Number(lines.shift());

const monthEnd = totalSales * 0.15

const total = monthEnd + salary

console.log(`TOTAL = R$ ${total.toFixed(2)}`)