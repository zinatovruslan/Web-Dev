n_english = int(input())
english = set(map(int, input().split()))
n_french = int(input())
french = set(map(int, input().split()))

both = english.intersection(french)
print(len(both))