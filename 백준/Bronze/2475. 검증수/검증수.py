n_list = list(map(int, input().split()))

for i in range(len(n_list)):
    n_list[i] *= n_list[i]

print(sum(n_list) % 10)
