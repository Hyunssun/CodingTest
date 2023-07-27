N = int(input())

arr = [input() for _ in range(N)]

result = list(set(arr))
result.sort()
result.sort(key=len)

for i in result:
  print(i)