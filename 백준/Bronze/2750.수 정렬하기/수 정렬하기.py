N = int(input())

n_list = []
for i in range(N):
    n_list.append(int(input()))

n_list.sort()
for i in range(len(n_list)):
    print(n_list[i])
