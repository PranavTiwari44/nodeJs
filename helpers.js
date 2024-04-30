// function sum(a, b) {
//     return a + b;
// }

const sum = (a,b) =>  a + b;

module.exports = {
    sum
}; 

console.log("PROCESS: ", process);

//exports.sum = (a,b) => a + b;
//could be written as a one liner

exports.mult = (a,b) => a * b;
