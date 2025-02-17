/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        let cur = words[i];
        let word = vowels.has(cur[0]) ? cur : cur.slice(1) + cur[0];
        word += 'ma' + 'a'.repeat(i+1);
        words[i] = word;
    }
    return words.join(' ');
};