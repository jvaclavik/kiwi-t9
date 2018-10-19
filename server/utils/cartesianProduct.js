const generateSequence = (a, b) => [].concat(...a.map(d => b.map(e => d + e)))

const getCartesianProduct = (a, b, ...c) =>
  b ? getCartesianProduct(generateSequence(a, b), ...c) : a

module.exports = getCartesianProduct
