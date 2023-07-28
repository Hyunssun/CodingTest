import sys

input = sys.stdin.readline

N = int(input())
N_list = list(map(int, input().split(' ')))
M = int(input())
M_list = list(map(int, input().split(' ')))
dic = dict()

for i in N_list:
  if i in dic:
    dic[i] += 1
  else:
    dic[i] = 1

for i in range(M):
  if M_list[i] in dic:
    print(dic[M_list[i]], end=' ')
  else:
    print(0, end=' ')