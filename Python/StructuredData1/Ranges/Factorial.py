# Write the factorial function. Remember, for a number n, the factorial is all numbers from 1 to n multiplied together.

# Write your function, here.
def factorial(num):
    total =1
    for i in range(1, num+1):
        total *=i
    return total

print(factorial(1))     #> 1
print(factorial(8))     #> 40320
print(factorial(12))    #> 479001600
