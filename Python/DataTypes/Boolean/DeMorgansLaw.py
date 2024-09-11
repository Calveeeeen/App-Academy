# Create a function that uses DeMorgan's Law to get the expected True/False statement.

# Write your function, here.
def de_morgans_law(val1, val2):
    if(not (val1 and val2)):
        return not val1 or not val2
    if(not (val1 or val2)):
        return not val1 and not val2
    return False
print(de_morgans_law(True, True)) # False
print(de_morgans_law(True, False)) # True
print(de_morgans_law(False, False)) # True
print(de_morgans_law("", [])) # True
print(de_morgans_law(2, 2)) # False
print(de_morgans_law(2, 0)) # True
