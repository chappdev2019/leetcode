class Solution:
    def maxFreqSum(self, s: str) -> int:
        vowels = "aeiou"
        letters = [0]*26
        max_vowels=0
        max_cons=0
        for letter in s:
            letters[ord(letter)-97]+=1
            if(letter in vowels):
                max_vowels=max(max_vowels,letters[ord(letter)-97])
            else:
                max_cons=max(max_cons,letters[ord(letter)-97])
        return max_vowels+max_cons

