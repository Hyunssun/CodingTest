sum = 0

for i in range(5):
    x = int(input())
    if x < 40:
        sum += 40
    else:
        sum += x

print(int(sum / 5))