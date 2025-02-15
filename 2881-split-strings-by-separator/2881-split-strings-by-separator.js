/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let res = [];
    for (const word of words) {
        let list = word.split(separator).filter(e => e!="");
        list.forEach(e => res.push(e))
    }
    return res;
};