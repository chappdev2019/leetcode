/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
    let maxEnergy = -Infinity;
    for (let i=0; i<k; i++) {
        let sum = 0;
        for (let j=energy.length-1-i; j>=0; j-=k) {
            sum += energy[j];
            maxEnergy = Math.max(maxEnergy, sum);
        }
    }

    return maxEnergy;
};