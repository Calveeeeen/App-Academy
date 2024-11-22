# It's time to explore the dictionary object and how to use it.

# Follow the instructions in the code comments.

# Be sure to test your work by running your code!

# There are two ways to declare dictionaries
# Create a dictionary and assign it to the d1 variable using the dict()
# constructor that has key/value pairs
#   key: "module", value: "Python 3"
#   key: "subject", value: "Dictionaries"
d1 = dict(module="Python 3", subject = "Dictionaries")# Your declaration here
print(d1)

# Create a dictionary and assign it to the d2 variable using the dictionary
# literal that has key/value pairs
#   key: "module", value: "Python 3"
#   key: "subject", value: "Dictionaries"
d2 = {"module": "Python 3" , "subject" : "Dictionaries"}# Your declaration here


# Unlike JavaScript, the keys in Python dictionaries can be any kind of
# value, not just strings or Symbols. Add a key to d1 that is the number
# one with the value "one". Then, add another key to d1 that is a string
# that contains the character 1 and give it the value of "one". Then,
# print the dictionary to see what's in there.
d1["1"] = "one"
print(d1)
d1[1] = "1"
print(d1)
# Convert d1 to a list using the list() method. Then, print it. What gets
# put into the list?
d1_as_list = list(d1)# Your conversion here
print(d1_as_list)


# Now, check that the following keys are in d1
#  "module"    should be True
#  "subject"   should be True
#  "age"       should be False
#  1           should be True
#  "1"         should be True
#  "one"       should be False
#  True        should be False
def checkKeys(dic, targ):
    for key in dic:
        if key == targ:
            return True
    return False

print(checkKeys(d1, "module"))
print(checkKeys(d1, "subject"))
print(checkKeys(d1, "age"))
print(checkKeys(d1, 1))
print(checkKeys(d1, "1"))
print(checkKeys(d1, "one"))
print(checkKeys(d1, True)) #idk how to fix this one. returns true because comparison is key == True which return true...
