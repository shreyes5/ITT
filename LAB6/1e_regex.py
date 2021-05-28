import re


def replace():

    s1 = "It is dead outside."

    print(re.sub(r"dead", "apocalyptic", s1))

    s2 = "Is this a cry for help ."

    print(re.sub(r"help", "pain", s2))


replace()
