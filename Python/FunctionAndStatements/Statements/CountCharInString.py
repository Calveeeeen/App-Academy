# Create a function that takes two strings as arguments and returns the number of times the first string
# (the single character) is found in the second string.

# Write your function, here.
def char_count(targ, string):
    count = 0
    i = 0
    while i < len(string):
        if(string[i] == targ):
            count+=1
        i += 1
    return count




print(char_count("a", "App Academy"))         #> 1
print(char_count("c", "Chamber of Secrets"))  #> 1
print(char_count("b", "big fat bubble"))      #> 4
