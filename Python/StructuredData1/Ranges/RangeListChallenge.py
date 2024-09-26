# Create a function that returns a list of 100 randomly generated numbers.

# Write your function, here.
import random
def rng(lst):
    for i in range(100):
        t=random.randint(0,100)
        lst.append(t)
    return lst
print(rng([]))
