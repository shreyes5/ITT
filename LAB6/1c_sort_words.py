sentence = input("Enter a string: ")

words = sentence.split()

words.sort()

for word in words:
    print(word)
