n = int(input())
num_list = list(map(int, input().split()))

ave = 0
for i in range(n):
    ave += num_list[i] / max(num_list) * 100
print(ave / n)
