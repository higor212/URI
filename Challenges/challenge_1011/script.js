const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const pi = 3.14159
const radius = Number(lines.shift());

const vol = (4 / 3) * pi * Math.pow(radius, 3)

console.log(`VOLUME = ${vol.toFixed(3)}`)