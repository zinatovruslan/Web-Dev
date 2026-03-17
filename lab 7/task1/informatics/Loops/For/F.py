x = int(input())

reversed_num = 0
while x > 0:
    last_digit = x % 10
    reversed_num = reversed_num * 10 + last_digit
    x = x // 10

print(reversed_num)