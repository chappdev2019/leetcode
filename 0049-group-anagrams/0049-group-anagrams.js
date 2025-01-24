/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split('').sort().join();
        let val = map.get(key) || [];
        val.push(strs[i]);
        map.set(key, val);
    }
    return Array.from(map.values());
}
