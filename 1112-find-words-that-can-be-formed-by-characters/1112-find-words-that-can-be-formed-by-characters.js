/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let freq = new Array(26).fill(0);
    const charToNum = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0);
    for (const char of chars) {
        freq[charToNum(char)]++;
    }
    let totalLen = 0;
    for (const word of words) {
        let valid = true;
        let ref = [...freq];
        for (let i = 0; i < word.length; i++) {
            if (ref[charToNum(word[i])] <= 0) {
                valid = false;
                break;
            }
            ref[charToNum(word[i])]--;
        }
        if (valid) totalLen += word.length;
    }
    return totalLen;
};