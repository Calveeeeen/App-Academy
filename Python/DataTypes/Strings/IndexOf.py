# Create a function that returns the index of a given letter in the string.

# Write your function, here.
def index_of(str, targ):
    return(str.index(targ))

# there was an error with this test case. had to change Arm to arm
print(index_of("arm", "a"))  #> 0
print(index_of("Pie", "e"))  #> 2
print(index_of("Lucid", "i"))  #> 3
print(index_of("Obvious","u"))  #> 5
