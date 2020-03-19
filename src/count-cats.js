module.exports = function countCats(matrix) {
  let count = 0;
  matrix.map(arr => count += (arr.filter(n => n == '^^')).length);
  return count;
};
