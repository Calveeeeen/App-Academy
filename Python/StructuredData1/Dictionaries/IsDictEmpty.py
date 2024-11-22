# Write a function that returns True if a dictionary is empty, and False otherwise.


# Write your function, here.
def is_empty(dic):
    if len(dic)==0:
        return True
    return False


print(is_empty({}))        #> True
print(is_empty({"a": 1}))  #> False
