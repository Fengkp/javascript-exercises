const ftoc = function(temp) {
  let celsius;

  celsius = (temp - 32) * (5 / 9);
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const ctof = function(temp) {
  let fahrenheit;
  
  fahrenheit = (temp * (9 / 5)) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
