if __name__ == '__main__':
    s = input()
    
found_alnum = False
for c in s:
    if c.isalnum():
        found_alnum = True
print(found_alnum)

found_alpha = False
for c in s:
    if c.isalpha():
        found_alpha = True
print(found_alpha)

found_digit = False
for c in s:
    if c.isdigit():
        found_digit = True
print(found_digit)

found_lower = False
for c in s:
    if c.islower():
        found_lower = True
print(found_lower)

found_upper = False
for c in s:
    if c.isupper():
        found_upper = True
print(found_upper)