import sys

input = sys.stdin.readline

N, M = map(int, input().split(' '))
N_arr = set(input().strip() for _ in range(N))
M_arr = set(input().strip() for _ in range(M))

result = list(N_arr & M_arr)
result.sort()

print(len(result))
for i in result:
  print(i)