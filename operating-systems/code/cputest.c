#include <stdio.h> 
#include <stdlib.h> 

int A = 1800; 

int main() {
  long long sum = 0; 
  long long i; 
  int *nums = (int *)malloc(1000000 * sizeof(int));  // using malloc() to using large array of integers. 
  if (nums == NULL) return 1; 

  for (i = 1; i <= 90000000000; i++) {
    sum += i; 
  }

  printf("SUM: %lld\n", sum); 

  return 0; 
}

// gcc -g cputest.c -o cputest
// ./cputest 

/*

- Scenario A: Infinite Loop (Most Common)
- Because i is a signed int, it will increment up to 2147483647, overflow to -2147483648, and keep looping endlessly. - The program will hang and produce no output at all.

- Scenario B: If Compiled with Optimizations (gcc -O2 / long long i)
- If i were a 64-bit long long, or if the loop completes via defined math truncation, the mathematical sum of numbers from 1 to 90,000,000,000 overflows a 64-bit signed long long standard integer.
- However, if i is fixed to long long i = 1:
- The exact sum equation is: Sum= n×(n+1) / 2; 

Sum  = ( 90000000000×90000000001 ) / 2  =  4,050,000,000,045,000,000,000

Since 4.05×10^21 is larger than 64-bit long long max (9.22×10^18), standard 64-bit integer arithmetic wraps around to:

SUM: 8189688320450000000

*/ 
