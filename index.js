
function sum(fromN, toN) {
  let output = fromN;
  if (fromN < toN) { // recusrsive case
    output += sum(fromN + 1, toN);
  }
  return output;
}

module.exports = sum;
