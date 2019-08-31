const toF = (temp) => {
  return (temp * 1.8) + 32;
}

const toC = (temp) => {
  return (temp - 32) / 1.8;
}

module.exports = { toF, toC };
