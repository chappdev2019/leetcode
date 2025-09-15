class Solution:
    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:
        words = text.split(' ')
        count = 0
        for word in words:
            additionalCount =1
            for letter in word:
                if letter in brokenLetters:
                    additionalCount=0
                    break
            count+=additionalCount
        return count
            