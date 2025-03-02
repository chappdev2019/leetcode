/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let res = 0;
    const len = (sentence) => sentence.split(" ").length;
    for (const sentence of sentences) {
        res = Math.max(res, len(sentence));
    }
    return res;
};