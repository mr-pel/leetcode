/**
 * @param {string} word
 * @return {number}
 */

var longestBeautifulSubstring = function (word) {
    const letters = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    };
    let currentSubstring = '';
    const beautifulSubstrings = [];

    for (let i = 1; i < word.length; i++) {
        const vowelDiff = letters[word[i]] - letters[word[i - 1]];
        if (vowelDiff >= 0) {
            currentSubstring += word[i - 1];
            if (word[i] === 'u' && (i === word.length - 1 || word[i + 1] !== 'u') && currentSubstring[0] === 'a') {
                currentSubstring += word[i];
                if ([...new Set(currentSubstring)].toString() === 'a,e,i,o,u'){
                    beautifulSubstrings.push(currentSubstring);
                    currentSubstring = '';
                }
            }
        } else {
            currentSubstring = '';
        }
    }

    beautifulSubstrings.sort((a, b) => b.length - a.length);
    return new Set(beautifulSubstrings[0]).size === 5 ? beautifulSubstrings[0].length : 0;
};


console.log(longestBeautifulSubstring('aeiaaioaaaaeiiiiouuuooaauuaeiu')); // "aaaaeiiiiouuu"
console.log(longestBeautifulSubstring('aeeeiiiioooauuuaeiou')); // "5"
console.log(longestBeautifulSubstring('a')); // "0"
console.log(longestBeautifulSubstring("eauoiouieaaoueiuaieoeauoiaueoiaeoiuieuaoiaeouiaueo")); // "0"
console.log(longestBeautifulSubstring('aaaaaeiaaioaaaaeiiiiouuuooaauuaeiuaaaaaaaaaaeeeeeeeeeeiiiiiiooooooooooooouuuuuuuuuuuu')); // "0"
console.log(longestBeautifulSubstring('uuuuuuuuooooooooiiiiiiiiieeeeeeeeeaaaaaaaaaauaeiou')); // "0"
