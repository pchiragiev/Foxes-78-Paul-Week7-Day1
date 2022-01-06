def consecutive(n):
    i = n[0]
    for x in n[1:]:
        if abs(x - i) > 1:
            return False
        i = x
    return True

print(consecutive([1,2,3,4,5]))
print(consecutive([2,4,6,8,10]))
print(consecutive([10,11,12,13,14]))