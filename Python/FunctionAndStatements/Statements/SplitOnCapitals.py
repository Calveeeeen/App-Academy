# Create a function which adds spaces before every capital in a word. Lower case the whole string afterwards.

# Write your function, here.
def cap_space(word):
    res = ""
    i = 0
    while i < len(word):
        if word[i].isupper():
            res += " "
        res += word[i]
        i += 1
    return res.lower()

print(cap_space("helloWorld"))     #> "hello world"
print(cap_space("iLoveMyTeapot"))  #> "i love my teapot"
print(cap_space("stayIndoors"))    #> "stay indoors"
