import sys

input = sys.stdin.readline

S = input()
S_arr = set()
for i in range(len(S)):
  for j in range(len(S)):
    if (S[i:j] != ''):
      S_arr.add(S[i:j])
print(len(S_arr))