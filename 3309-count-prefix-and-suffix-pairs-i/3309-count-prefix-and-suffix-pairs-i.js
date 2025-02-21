/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let count = 0;
    const isPrefixAndSuffix = (word1, word2) => {
        const wordOneLen = word1.length;
        const wordTwoLen = word2.length;
        const isPrefix = word1 === word2.slice(0, wordOneLen);
        const isSuffix = word1 === word2.slice(wordTwoLen-wordOneLen);
        return isPrefix && isSuffix;
    }
    for (let i = 0; i < words.length; i++) {
        for (let j = i+1; j < words.length; j++) {
            if(isPrefixAndSuffix(words[i],words[j])) count++;
        }
    }
    return count;
};