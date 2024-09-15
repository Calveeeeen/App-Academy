# Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If
# it is impossible to form any triangle of a non-zero area, return 0.

# technically I think this code works, it times out because of time error

class Solution:
    def largestPerimeter( nums):
        nums.sort(reverse=True)
        largest = 0
        for i in range(len(nums)-2):
            for t in range(1,len(nums)-1):
                for x in range(2,len(nums)):
                    c = nums[x]
                    b = nums[t]
                    a = nums[i]
                    if((i is not t and t is not x and i is not x) and (int(a)+int(b)>int(c)) and (int(a)+int(c)>int(b)) and (int(b)+int(c)>int(a))):
                        if(a+b+c > largest):
                            largest = a+b+c
        return largest

    print(largestPerimeter([2,1,2]))
    print(largestPerimeter([1,2,1,10]))
