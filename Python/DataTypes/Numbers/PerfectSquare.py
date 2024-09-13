# Create a function that returns True if the first value is a perfect square of the second value; otherwise return False.

# Write your function, here.
def perfect_square(num1, num2):
    if(num2**2 == num1):
        return True
    return False


print(perfect_square(15, 5)) #> False
print(perfect_square(25, 5)) #> True
print(perfect_square(81, 9)) #> True
print(perfect_square(9, 2))  #> False
