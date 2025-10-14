/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
  const n = energy.length;
  let ans = -Infinity;

  for (let start = 0; start < k; start++) {
    const last = start + Math.floor((n - 1 - start) / k) * k;
    let suffix = 0;
    for (let j = last; j >= start; j -= k) {
      suffix += energy[j];    
      if (suffix > ans) ans = suffix;
    }
  }
  return ans;
};