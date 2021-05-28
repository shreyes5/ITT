def palindrome(list, n):

    flag = 0

    i = 0
    while (i <= n // 2 and n != 0):

        if (list[i] != list[n - i - 1]):
            flag = 1
            break
        i += 1

    if (flag == 1):
        print("Not Palindrome")
    else:
        print("Palindrome")


list = []
n = int(input("Enter size of list"))

for i in range(0, n):
    e = int(input())

    list.append(e)

palindrome(list, n)
