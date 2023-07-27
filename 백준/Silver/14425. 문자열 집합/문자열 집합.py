N, M = map(int, input().split())

S = set(input() for _ in range(N))

cnt = 0
for _ in range(M):
  M_input = input()
  if M_input in S:
    cnt = cnt + 1
print(cnt)