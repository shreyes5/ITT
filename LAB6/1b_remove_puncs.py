punctuation = '''''!()-[]{};:'"\,<>./?@#$%^&*_~'''

str = input("Enter a string: ")

no_p = ""
for char in str:
    if char not in punctuation:
        no_p = no_p + char
print(no_p)
