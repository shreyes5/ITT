def pal(s):
    return s == s[::-1]


s = input("Enter a string:  ")
isIT = pal(s)

if isIT:
    print("palindrome")

else:
    print("not palindrome")
