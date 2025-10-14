const uppercaseAll = (...rest) => {
  let newArr = [];
  for (const arg of rest) {
    newArr.push(arg.toUpperCase());
  }
  return newArr
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = [coordinates[0], coordinates[1]];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
