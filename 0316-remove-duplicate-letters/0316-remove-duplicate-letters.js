/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const last_occurrence = {};
  for (let i = 0; i < s.length; i++) {
    last_occurrence[s[i]] = i; 
  }

  const stack = [];
  const seen = new Set();

  for (let i = 0; i < s.length; i++) {
    const currentChar  = s[i];

    if (seen.has(currentChar )) continue; 
    while (
      stack.length > 0 &&
      currentChar  < stack[stack.length - 1] && 
      last_occurrence[stack[stack.length - 1]] > i 
    ) {
      seen.delete(stack.pop());
    }

    stack.push(currentChar );
    seen.add(currentChar );
  }
  return stack.join('');
};