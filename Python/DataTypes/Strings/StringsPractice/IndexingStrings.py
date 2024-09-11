# Create a function called index_string that takes a string as an argument and returns that string from the index of 3, up to (but not including)
# the end of the string. See the example test cases for expected output.

# Write your function, here.
def index_string(str):
    return(str[3:-1])


print(index_string("Alchemy"))     #> hem
print(index_string("Ridiculous"))  #> iculou
print(index_string("Serendipity")) #> endipit
