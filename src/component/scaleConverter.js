export function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

export function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function convert(temperatur, toConvert) {
  const input = parseFloat(temperatur);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = toConvert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
