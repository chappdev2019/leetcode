/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let res = []
    res.push(words[0])
    for (let i = 1; i < words.length; i++) {
        let prevSorted = words[i-1].split('').sort().join('')
        if (words[i].split('').sort().join('')!=prevSorted) {
            res.push(words[i])
        } 
    }

    return res;
};