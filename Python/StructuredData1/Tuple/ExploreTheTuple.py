
# It's time to explore the tuple object and how to use it.

# Follow the instructions in the code comments. Be sure to test your work by running your code!

# For the bonus, remember you can split a returned tuple to variables: (a,b,c) = myfunc()

# DO NOT EDIT
odds = 1,3,5,7,9
evens = 2,4,6,8

# Step 1: Print out the result of adding evens to odds
nums = odds + evens
print(sum(nums))

# Step 2: Print out the result of multiplying odds by three
newOdds = []
for i in range(len(odds)):
    newOdds.append(odds[i]*3)
print(newOdds)
# Step 3A: Use print to find out if odds is less than evens
# t = y = 0
# while t < len(odds) or y < len(evens):
#     if odds[t] < evens[y]:
#         print(str(odds[t]), " is less than ", str(evens[y]))
#         t +=1
#     elif evens[y] < odds[t]:
#         print(str(odds[t]), " is less than ", str(evens[y]))
#         y += 1
#     elif y > len(evens):
#         print(str(odds[t]), "is larger than any number in the evens list")
#         t += 1
#     else:
#         print(str(evens[y]), "is larger than any number in the odds list")
#         y += 1
# Step 3B: Print out your explanation of why 3A has that result


# Step 4: Print out the average of the numbers in evens using one line of code
print(sum(evens)/len(evens))

# Step 5A: Write a function 'minmaxmean' that accepts an iterable and
#         returns the minimum value, the maximum value and the average (mean)
def minmaxmean(iterable):
    mini = min(iterable)
    maxi = max(iterable)
    mean = sum(iterable)/(len(iterable))
    return maxi, mini, mean

# Step 5B: Use print to confirm you function is working on evens and odds
print(minmaxmean(evens))
print(minmaxmean(odds))

# BONUS: Call your function with a new tuple of your own creation
#        And print the results in a pretty way
