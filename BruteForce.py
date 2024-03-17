def brute_force(a, current_digit):
    if current_digit == 4:
        #  This means that we already chosen all 4 digits and we can just print the result
        print(a)
    else:
        #  Try to put each digit on the current_digit place and launch recursively
        for i in range(5):
            a[current_digit] = i
            brute_force(a, current_digit + 1)

a = [0] * 4
brute_force(a, 0)
