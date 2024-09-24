# Given a square matrix mat, return the sum of the matrix diagonals.

# Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not
# part of the primary diagonal.

class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        arr = []
        length = len(mat)
        for i in range(len(mat)):
            arr.append(mat[i][i])
            arr.append(mat[i][length-1-i])
        totalSum = sum(arr)
        if len(mat)%2!=0:
            totalSum-=mat[len(mat)//2][len(mat)//2]

        print(arr)
        return totalSum
