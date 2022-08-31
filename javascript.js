function capitalize(str) {
  let first = str.at(0);
  first = first.toUpperCase();
  str = first.concat(str.slice(1))
  return str;
}

function reverseString(str) {
  let returnStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    returnStr = returnStr + str.at(i)
  }
  return returnStr;
}

let calculator = {
  multiply: multiply = (x, y) => {
    return x * y;
  },
  divide: divide = (x, y) => {
    return x / y;
  },
  subtract: subtract = (x, y) => {
    return x - y;
  },
  add: add = (x, y) => {
    return x + y;
  }
}

function cipher(key, str) {
  let returnStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 96)
      returnStr = returnStr + (key.charAt(str.charCodeAt(i)-97))
    else
      returnStr = returnStr + (key.charAt(str.charCodeAt(i)-65)).toUpperCase()
  }
  return returnStr;
}

function analyzeArray(arr) {
  let returnObj = {};
  returnObj.max = Math.max(...arr);
  returnObj.min = Math.min(...arr);
  returnObj.length = arr.length;
  returnObj.average = 0;
  arr.forEach(num => {
    returnObj.average = returnObj.average + num;
  })
  returnObj.average = returnObj.average / arr.length;
  return returnObj;
}

module.exports = { capitalize, reverseString, calculator, cipher, analyzeArray };