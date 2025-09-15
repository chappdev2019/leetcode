/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
    const vowels = Object.fromEntries("aeiouAEIOU".split('').map(x=>[x,0]));
    
    const vowelSet = new Set("aeiouAEIOU".split(''));
    let result = "";
    for (const letter of s) {
        if (vowelSet.has(letter)) {
            vowels[letter]++;
        }
    }
    const getNextVowel = (start = 0) => {
        const selection = "AEIOUaeiou".split('');
        if (vowels[selection[start]] > 0) {
            vowels[selection[start]]--;
            return selection[start];
        } else {
            return getNextVowel(start + 1);
        }
    };
    for (const letter of s) {
        if (vowelSet.has(letter)) {
            result += getNextVowel();
        }
        else {
            result += letter;
        }
    }
    return result
};