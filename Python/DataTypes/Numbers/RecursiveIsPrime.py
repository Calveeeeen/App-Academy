# Create a function called is_prime that takes in a number and a variable that equates to 2. The function should return True/False if the
# number is a prime number. Bonus: Try to do this recursively.

# Write your solution here.
def is_prime(num):
    if(num == 1):
        return False
    for i in range(2,int(num)):
        if(num%i==0):
            return False
    return True


print(is_prime(1))  #> False
print(is_prime(2))  #> True
print(is_prime(3))  #> True
print(is_prime(5))  #> True
print(is_prime(9))  #> False
print(is_prime(15)) #> False
