# Create a function that returns whether or not the string is a Palindrome.

# Write your function, here.
def is_palindrome(str):
    reverse = "".join(reversed(str))

    if(reverse == str):
        return True

    return False

print(is_palindrome("kayak")) # True
print(is_palindrome("app"))  # False
print(is_palindrome("racecar")) # True
print(is_palindrome("valid")) # False