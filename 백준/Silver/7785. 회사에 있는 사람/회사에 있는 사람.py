N = int(input())

name = set()
for _ in range(N):
  arr = list(input().split())
  if arr[1] == 'enter':
    name.add(arr[0])
  else:
    if name:
      name.remove(arr[0]) 
result = list(name)
result.sort(reverse=True)
for i in result:
  print(i)