const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const raio = parseFloat(lines.shift())

const pi = 3.14159
const area = pi * Math.pow(raio, 2)
console.log(`A=${area.toFixed(4)}`)