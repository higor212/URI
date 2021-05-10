const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const infoPart = lines.shift().split(' ')
const infoPart2 = lines.shift().split(' ')

const partId = infoPart.shift();
const numberPart = infoPart.shift()
const unitaryValuePart = infoPart.shift()


const part2Id = infoPart2.shift();
const numberPart2 = infoPart2.shift()
const unitaryValuePart2 = infoPart2.shift()

const totalValue = ((numberPart * unitaryValuePart) + ( numberPart2 * unitaryValuePart2));

console.log(`VALOR A PAGAR: R$ ${totalValue.toFixed(2)}`)