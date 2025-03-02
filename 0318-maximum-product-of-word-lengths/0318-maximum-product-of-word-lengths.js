/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let wordMap = new Map();
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let bitmask = 0;
        words[i].split('').forEach(char => bitmask |= (1 << (char.charCodeAt(0) - 97)));
        if (!wordMap.has(bitmask) || wordMap.get(bitmask) < word.length) {
            wordMap.set(bitmask, word.length);
        }
    }
    let maxProduct = 0;
    let keys = Array.from(wordMap.keys());
    for (let i = 0; i < keys.length; i++) {
        for (let j = i + 1; j < keys.length; j++) {
            if ((keys[i] & keys[j]) === 0) { 
                maxProduct = Math.max(maxProduct, wordMap.get(keys[i]) * wordMap.get(keys[j]));
            }
        }
    }
    return maxProduct;
};
