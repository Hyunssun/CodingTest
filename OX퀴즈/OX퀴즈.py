n = int(input())

for i in range(n):
    ox = list(map(str, input()))
    score = 0
    cnt = 1
    for i in ox:
        if i == 'O':
            score += cnt
            cnt += 1
        else:
            cnt = 1

    print(score)
