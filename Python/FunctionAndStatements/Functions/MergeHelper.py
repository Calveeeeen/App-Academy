# Recall the merge sort algorithm:


# Find midpoint to divide list in half
# Call merge_sort recursively on the first half
# Call merge_sort recursively on the second half
# Merge the two sorted halves with merge


# Implement the merge_sort function with the merge helper function.

# Write your code here.
def merge_sort(lst):
    # Call merge somewhere in here
    if len(lst)>1:
        mid = len(lst)//2
        firstHalf = merge_sort(lst[:mid])
        secondHalf = merge_sort(lst[mid:])
        return merge(firstHalf, secondHalf)
    return lst


def merge(first_half, second_half):
    # Merge logic goes here
    arr = []
    i = j = 0
    while i < len(first_half) or j < len(second_half):
        val1 = first_half[i]
        val2 = second_half[j]
        if i == len(first_half):
            arr.append(val2)
            j+=1
        elif j == len(second_half):
            arr.append(val1)
            i+=1
        elif(val1 < val2):
            arr.append(val1)
            i+=1
        elif(val2<val1):
            arr.append(val2)
            j+=1
    return arr

lst = [5, 2, 38, 91, 16, 427]

sorted_lst = merge_sort(lst)        # Out of place solution
print(sorted_lst)

# merge_sort(lst)                     # In place solution
# print(lst)
