# Create a function that takes in a tuple, tup and a value, val. The function should return a tuple with the given value added
# to the end of the tuple.

# Write your function, here.
def add_value(tup, val):
    list= []
    for i in range(len(tup)):
        list.append(tup[i])
    list.append(val)
    return tuple(list)

print(add_value((1,2,3,4), 5)) #> (1, 2, 3, 4, 5)
print(add_value(("a", "b", "c"), "d")) #> ('a', 'b', 'c', 'd')
print(add_value((8, 9, "d", 6), "a")) #> (8, 9, 'd', 6, 'a')
