import sys

N = int(input())

n_list = []
for i in range(N):
    a = int(sys.stdin.readline())
    n_list.append(a)

n_list.sort()
for i in n_list:
    print(i)
