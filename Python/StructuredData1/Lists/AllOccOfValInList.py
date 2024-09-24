# Create a function that returns the indices of all occurrences of an item in the list.

# Write your function, here.
def get_indices(list, targ):
    arr = []
    for i in range(len(list)):
        if list[i] == targ:
            arr.append(i)
    return arr

print(get_indices(["a", "a", "b", "a", "b", "a"], "a"))
# Prints [0, 1, 3, 5]

print(get_indices([1, 5, 5, 2, 7], 7))
# Prints [4]

print(get_indices([1, 5, 5, 2, 7], 5))
# Prints [1, 2]

print(get_indices([1, 5, 5, 2, 7], 8))
# Prints []
