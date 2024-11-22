# Write a function that returns True if a dictionary contains the specified key, and False otherwise.

# Write your function, here.
def has_key(dic , key):
    for i in dic:
        if i == key:
            return True
    return False



print(has_key({ "a": 44, "b": 45, "c": 46 }, "d"))
# False

print(has_key({ "craves": True, "midnight": True, "snack": True }, "morning"))
# False

print(has_key({ "pot": 1, "tot": 2, "not": 3 }, "not"))
# True
