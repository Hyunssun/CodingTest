import sys

input = sys.stdin.readline

N, M = map(int, input().split())
N_arr = set(input().split())
M_arr = set(input().split())
print(len(N_arr - M_arr) + len(M_arr - N_arr))