# Create a function that takes in a tuple of strings. It should return a tuple including only the strings that are greater than 8
# letters in length. Bonus: This can be solved in a single line of code.

# Write your function, here.
def big_words(tup):
    arr = []
    for word in tup:
        if len(word) > 8:
            arr.append(word)
    return tuple(arr)

print(big_words(('earth', 'jupiter', 'mars', 'neptune'))) #> ()
print(big_words(('wakanda', 'melbourne', 'london', 'france'))) #> ('melbourne',)
print(big_words(('app', 'academy', 'app academy', 'xylophone'))) #> ('app academy', 'xylophone')
