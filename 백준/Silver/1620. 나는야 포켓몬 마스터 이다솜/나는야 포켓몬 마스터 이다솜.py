import sys

N, M = map(int, input().split())

dict_num = {}
dict_name = {}
for i in range(N):
  name = input()
  dict_num[i] = name
  dict_name[name] = i

for _ in range(M):
  a = sys.stdin.readline().strip()
  if a.isdigit():
    print(dict_num.get(int(a) - 1))
  else:
    print(dict_name.get(a) + 1)