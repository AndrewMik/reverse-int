module.exports = function reverse (n) {
  let result = "";

  n = n < 0 ? n*-1 : n;

  for (let i = 0; i < n.toString().length; i++){
    result += n.toString()[n.toString().length-1-i];
  }

  return result;
}
