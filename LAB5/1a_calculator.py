def add(x, y):
    return x+y


def subtract(x, y):
    return x-y


def divide(x, y):
    return x/y


def multiply(x, y):
    return x*y


print("Select operation")
print("1- Addition")
print("2- Subtract")
print("3- Divide")
print("4- Multiply")


while True:
    choice = input("Enter operation to do  ")

    if choice in ('1', '2', '3', '4'):
        a = float(input("Enter first number"))
        b = float(input("Enter second number"))

        if choice == '1':
            print("Addition of these numbers is", add(a, b))
        elif choice == '2':
            print("Subtraction of these numbers is", subtract(a, b))
        elif choice == '3':
            print("Division of these numbers is", divide(a, b))
        elif choice == '4':
            print("Multiplication of these numbers is", multiply(a, b))
        break
    else:
        print("Input properly na what is this")
