/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
    let spaceCount = 0;
    let i = 0;
    let con = text.split(' ').filter(e => e.length!=0);
    while (i < text.length) {
        while (i < text.length && text[i] == ' ') {
            spaceCount++;
            i++;
        }
        while (i < text.length && text[i] != ' ') {
            i++;
        }
    }
    const wordCount = con.length
    if (wordCount === 1) {
        return con[0] + ' '.repeat(spaceCount);
    }
    let totalSpce = Math.floor(spaceCount / (wordCount - 1));
    let remainder = spaceCount % (wordCount - 1);
    let res = ''
    for (let i = 0; i < con.length - 1; i++) {
        res += con[i] + ' '.repeat(totalSpce);
    } 

    return res + con[con.length-1] + ' '.repeat(remainder);
    }