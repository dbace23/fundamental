const x = [ -4,3,-9,0,4,1]

let positiveNumbersCount = x.filter(x => x > 0).length;
let negativeNumbersCount = x.filter(x =>x < 0).length;
let zeroNumbersCount = x.filter(x =>x === 0).length;
let numbersCount=x.length;

console.log ((positiveNumbersCount/numbersCount).toFixed(5) + '\n' + (negativeNumbersCount/numbersCount).toFixed(5) + '\n'+ (zeroNumbersCount/numbersCount).toFixed(5));



