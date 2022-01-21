num = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
a = input().lower()

time = 0
for i in range(len(a)):
    for j in num:
        if a[i] in j:
            time += num.index(j) + 3
print(time)
