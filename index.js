const c2F = (temp) => {
  return (temp * 1.8) + 32;
}

const f2C = (temp) => {
  return (temp - 32) / 1.8;
}

module.exports = { c2F, f2C };
