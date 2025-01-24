/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function groupAnagrams(strs) {
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        let counter = new Array(26).fill(0);
        strs[i].split('').forEach(e => counter[e.charCodeAt(0)-'a'.charCodeAt(0)]++)
        let key = String(counter);
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(strs[i]);
    }
    return Array.from(map.values());
}
