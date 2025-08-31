from itertools import product
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        nums = [0,1,2,3,4,5,6,7,8]
        coords = [0,1,2]
        coords2d = product(coords,coords)
        rowCheck = lambda r:self.checkRow(board,r)
        colCheck = lambda c:self.checkCol(board,c)
        smallSquareCheck = lambda item:self.check3x3(board,item[0],item[1])
        return all(map(rowCheck,nums)) and all(map(colCheck,nums)) and all(map(smallSquareCheck,coords2d))

    def checkRow(self,board,row) -> bool:
        nums = set()
        for c in range(0,9):
            curr = board[row][c]
            if curr == '.':
                continue
            if curr in nums:
                return False
            nums.add(curr)
        return True

    def checkCol(self,board,col) -> bool:
        nums = set()
        for r in range(0,9):
            curr = board[r][col]
            if curr == '.':
                continue
            if curr in nums:
                return False
            nums.add(curr)
        return True

    def check3x3(self,board,top,left) -> bool:
        nums = set()
        for r in range(0,3):
            for c in range(0,3):
                curr = board[r+top*3][c+left*3]
                if curr == '.':
                    continue
                if curr in nums:
                    return False
                nums.add(curr)
        return True
