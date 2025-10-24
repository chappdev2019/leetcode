/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let str = String(x).split('').reverse();
  let sign = '';
  if (str[str.length-1] == '-') {
    sign = str.pop();
  }
  while (str[0] === '0') str.shift();
  let s = (sign  ? sign : '')  + str.join('');
  let num = Number(s);
  const MAX = 2 ** 31 - 1;  
  const MIN = -(2 ** 31)
  if (num < MIN || num > MAX) return 0;
  return num;
};