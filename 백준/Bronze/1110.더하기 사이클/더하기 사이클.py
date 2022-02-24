N = num = int(input())
cnt = 0

while True:
    sum = num // 10 + num % 10
    new = (num % 10) * 10 + (sum % 10)
    num = new
    cnt += 1

    if(N == num):
        break

print(cnt)
