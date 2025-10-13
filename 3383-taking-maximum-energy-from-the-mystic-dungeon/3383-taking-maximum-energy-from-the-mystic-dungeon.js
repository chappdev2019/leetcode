/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
    const n = energy.length;
    let maxEnergy = -Infinity;

    for (let start = 0; start < k; start++) {
        let sum = 0;
        const last = start + Math.floor((n - 1 - start) / k) * k; 
        for (let i = last; i >= start; i -= k) {
            sum += energy[i];
            maxEnergy = Math.max(maxEnergy, sum);
        }
    }

    return maxEnergy;
};