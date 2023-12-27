export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function doubleDigit(num: number) {
  if (num.toString().length > 1) return num;
  return `0${num}`;
}
