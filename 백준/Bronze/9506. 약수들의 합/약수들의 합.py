while True:
  arr=[]
  n = int(input())
  if n == -1:
    break
  else:
    sum = 0
    for i in range(1, n+1):
      if n % i == 0:
        if n != i:
          arr.append(i)
          sum = sum + i
  if sum == n:
    print(n,'=', end=' ')
    for i in range(0, len(arr)):
      print(arr[i], end=' ')
      if i+1 == len(arr):
        print()
        break
      print('+', end=' ')
  else:
    print(n,'is NOT perfect.')