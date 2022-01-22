c = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
a = input()

for i in c :
    a = a.replace(i, 'a')
print(len(a))