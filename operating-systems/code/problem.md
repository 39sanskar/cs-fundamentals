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


#### Here are the three best ways to fix this issue:

#### 1. Dynamic Allocation (Recommended) => Allocate the memory on the heap instead of the stack using malloc. The heap has access to almost all available system memory.

```c 
#include <stdio.h>
#include <stdlib.h> // Required for malloc and free

#define ARRAY_SIZE 1024000

int main() {
    // Allocate memory on the heap
    char *heapArray = (char *)malloc(ARRAY_SIZE * sizeof(char));
    
    // Check if the allocation was successful
    if (heapArray == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    // Initialize the array
    for (int i = 0; i < ARRAY_SIZE; i++) {
        heapArray[i] = (char)(i % 256);
    }

    printf("Array initialization completed.\n");

    // Always free heap memory when done
    free(heapArray); 

    return 0;
}

// Output: Array initialization completed 

```

#### 2. Make it a Static Variable => Adding the static keyword moves the array out of the stack and into the program's data segment, which does not have the strict size limits of the stack.
```c 
#include <stdio.h>

#define ARRAY_SIZE 1024000

int main() {
    // 'static' keeps it alive for the program's duration and off the stack
    static char stackArray[ARRAY_SIZE];  

    for (int i = 0; i < ARRAY_SIZE; i++) {
        stackArray[i] = (char)(i % 256);
    }

    printf("Array initialization completed.\n");

    return 0;
}

// Output: Array initialization completed. 

``` 

#### 3. Move it to Global Scope => Declaring the array outside of main() achieves the same effect as making it static. It gets placed in the global data region rather than the stack. 

```c 
#include <stdio.h>

#define ARRAY_SIZE 1024000

char globalArray[ARRAY_SIZE]; // Global variables live outside the stack

int main() {
    for (int i = 0; i < ARRAY_SIZE; i++) {
        globalArray[i] = (char)(i % 256);
    }

    printf("Array initialization completed.\n");

    return 0;
}

// Output: Array initialization completed. 
```
```c 
Output of the above program  

First Comile the program

gcc -g problem.c -o problem
./problem 

Output: Array initialization completed. 
``` 
