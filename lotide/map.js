const eqArrays = function(ar1, ar2){
  for (let i = 0; i < ar1.length; i++){
    if (ar1[i] === ar2[i]){
      return true;
     }
     if (ar1[i] !== ar2[i]){
      return false
     }
    }
  }
const assertArraysEqual = function (ar1, ar2) {
  if (ar1 === ar2) {
    console.log(`✅✅✅ Assertion Passed: ${ar1} ===  ${ar2}`)
  } else (ar1 !== ar2); {
    console.log(`🛑🛑🛑 Assertion Failed: ${ar1} !== ${ar2}`)
  }

};

const words = ["get", "ready", "to", "fire", "abdulahi"]; 
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);
