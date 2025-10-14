const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true) {
    arr.unshift(value)
  } else {
    arr.push(value)
  }
};

const reverseString = (string) => {
  str = string.split('');
  str.reverse();
  return str.join("");
};

const newArrayFullOf = (value, numOfValue) => {
  let arr = new Array(numOfValue)
  return arr.fill(value, 0, numOfValue)
};

const insertIntoMiddle = (arr, value) => {
  arr.splice(Math.floor(arr.length / 2), 0, value)
};

const deleteFromMiddle = (arr) => {
  arr.splice(Math.floor(arr.length / 2), 1)
};

const isRightIndex = (arr, value, index) => {
  return arr[index] === value ? true : false
};

const roundAllNumsDown = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.floor(arr[i]))
  }
  return newArr
};

const getAllYCoordinates = (arrOfCoords) => {
  let newArr = [];
  for (let i = 0; i < arrOfCoords.length; i++) {
    newArr.push(arrOfCoords[i][1])
  }
  return newArr
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
