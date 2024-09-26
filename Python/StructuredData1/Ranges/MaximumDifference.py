# Given a list of integers, return the difference between the largest and smallest integers in the list.

# Write your function, here.
def difference(arr):
    max1 = max(arr)
    min1 = min(arr)
    return max1-min1

# they way they wanted us to do it
def difference(arr):
    largest = smallest = arr[1]
    for i in range(len(arr)):
        el = arr[i]
        if(el < smallest):
            smallest = el
        if el > largest:
            largest = el
    return largest-smallest

print(difference([10, 15, 20, 2, 10, 6]))
# 20 - 2 = 18

print(difference([-3, 4, -9, -1, -2, 15]))
# 15 - (-9) = 24

print(difference([4, 17, 12, 2, 10, 2]))
# 17 - 2 = 15
