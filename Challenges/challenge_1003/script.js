const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const values = input.split('\n');

const valorA = parseInt(values.shift());
const valorB = parseInt(values.shift());

const somar = valorA + valorB;

console.log(`SOMA = ${somar}`);