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

const dist = {
  cm2FT: (dist) => {
    return dist/30.48;
  },
  cm2IN: (dist) => {
    return dist/2.54;
  },
  cm2MM: (dist) => {
    return dist * 10;
  },
  ft2CM: (dist) => {
    return dist * 30.48;
  },
  ft2MM: (dist) => {
    return dist * 304.8;
  },
  ft2IN: (dist) => {
    return dist * 12;
  },
  ft2M: (dist) => {
    return dist * 0.3048;
  },
  in2CM: (dist) => {
    return dist * 2.54;
  },
  in2FT: (dist) => {
    return dist / 12;
  },
  in2M: (dist) => {
    return dist * 0.0254;
  },
  in2MM: (dist) => {
    return dist * 25.4;
  },
  km2MI: (dist) => {
    return dist/1.609344;
  },
  m2FT: (dist) => {
    return dist/0.3048;
  },
  m2IN: (dist) => {
    return dist/0.0254;
  },
  mi2KM: (dist) => {
    return dist * 1.609344;
  },
  mm2CM: (dist) => {
    return dist/10;
  },
  mm2FT: (dist) => {
    return dist/304.8;
  },
  mm2IN: (dist) => {
    return dist/25.4;
  }
};

const mass = {
  g2KG: (mass) => {
    return mass/1000;
  },
  g2MG: (mass) => {
    return mass * 1000;
  },
  g2O: (mass) => {
    return mass/28.34952;
  },
  g2P: (mass) => {
    return mass/453.59237;
  },
  kg2G: (mass) => {
    return mass * 1000;
  },
  kg2MG: (mass) => {
    return mass * 1000000;
  },
  kg2O: (mass) => {
    return mass/0.02834952;
  },
  kg2P: (mass) => {
    return mass/0.45359237;
  },
  kg2T: (mass) => {
    return mass/1000;
  },
  mg2G: (mass) => {
    return mass/1000;
  },
  mg2KG: (mass) => {
    return mass/1000000;
  },
  o2G: (mass) => {
    return mass * 28.34952;
  },
  o2KG: (mass) => {
    return mass * 0.02834952;
  },
  o2P: (mass) => {
    return mass/16;
  },
  p2G: (mass) => {
    return mass * 453.59237;
  },
  p2KG: (mass) => {
    return mass * 0.45359237;
  },
  p2O: (mass) => {
    return mass * 16;
  },
  p2S: (mass) => {
    return mass/14;
  },
  p2T: (mass) => {
    return mass * 0.00045359237;
  },
  s2P: (mass) => {
    return mass * 14;
  },
  t2KG: (mass) => {
    return mass * 1000;
  },
  t2P: (mass) => {
    return mass/0.00045359237;
  }
};

module.exports = { temp, dist, mass };
