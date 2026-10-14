#### Question 1:  When I run a program, a process is created and the program instructions are loaded in what section of the process? 

##### Ans: Text or code section is where the program instructions live. 


#### Question 2: Consider this C Code, running this code may result in segmentation fault, why is that? 

```c

#include <stdio.h>
 
#define ARRAY_SIZE 1024000
 
int main() {
    char stackArray[ARRAY_SIZE];  
 
    // Attempt to initialize the array
    for (int i = 0; i < ARRAY_SIZE; i++) {
        stackArray[i] = (char)(i % 256);
    }
 
    printf("Array initialization completed.\n");
 
    return 0;
}

``` 
##### Output:  The array is being allocated entirely in the stack, with the stack having fixed size the main function may overflow the stack. 
- code is likely causing a Segmentation Fault (Stack Overflow) because you are allocating a large array of ~1 MB (1,024,000 bytes) directly on the stack.
- On many modern operating systems (like Windows or Linux), the default stack size allocated to a program is limited—often around 1 MB to 8 MB. Allocating an array this large can instantly exhaust the available stack space, leading to a program crash before the printf statement is ever reached.


#### Question 3: Giving this C code complete the following following assembly code

```c

int main ()
{
int a = 1;
int b = 2;
short c = 2;
return;
}

```
```c

Output assembly: 

str r0, [bp, #-8] 
str r0, [bp, #-12] 
str r0, [bp,  ???]

```
```c
Correct Output is: 

str r0, [bp, #-8] 
str r0, [bp, #-12] 
str r0, [bp, #-14]

```
##### Explaination:  Sort is 2 bytes, so -12-2 = -14 
