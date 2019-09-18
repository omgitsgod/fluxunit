const temp = {
  c2F: (temp) => {
    return (temp * 1.8) + 32;
  },
  c2K: (temp) => {
    return temp + 273.15;
  },
  c2R: (temp) => {
    return (temp + 273.15) * 9/5;
  },
  f2C: (temp) => {
    return (temp - 32) / 1.8;
  },
  f2K: (temp) => {
    return (temp + 459.67) * 5/9;
  },
  f2R: (temp) => {
    return temp + 459.67;
  },
  k2F: (temp) => {
    return temp * (9/5) - 459.67;
  },
  k2C: (temp) => {
    return temp - 273.15;
  },
  k2R: (temp) => {
    return temp * 9/5;
  },
  r2C: (temp) => {
    return (temp - 491.67) * 5/9;
  },
  r2F: (temp) => {
    return temp - 459.67;
  },
  r2K: (temp) => {
    return temp * 5/9;
  }
};

module.exports = { temp };
