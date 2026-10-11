#include <stdio.h> 

int main() {
  int a = 1; 
  int b = 2; 
  int c = a + b; 
  printf("a + b = %d", c); 
  c = c + 1; 

  return 0; 
}

// gcc -S test.c -o test.s  
// cat test.s 

/* 

1. gcc -S test.c -o test.s
gcc (or clang on macOS): This is the C compiler.
-S: This flag tells the compiler to stop after the compilation stage. Instead of generating a machine-readable binary executable, it translates your C source code (test.c) into human-readable Assembly language and saves it into the output file.
-o test.s: Specifies the name of the output file where the generated assembly code will be written (test.s).

2. cat test.s
cat (short for concatenate): A standard command-line utility used to read files and stream their contents directly to your terminal window.
test.s: The assembly file you just generated in the previous step.
Result: Running this command prints the entire contents of test.s onto your screen so you can inspect how the C code was translated into low-level assembly instructions.

*/



// gcc -g test.c -o test   
// cat test 

/*

1. gcc -g test.c -o test
gcc: The C compiler (on macOS, invoking gcc automatically runs Apple's clang compiler front-end).
-g: Includes debugging information (symbols, line numbers, and variable names) inside the compiled file. This allows debuggers like LLDB or GDB to map machine instructions back to your exact lines of source code in test.c.
test.c: Your C source code file.
-o test: Specifies the output executable's name as test instead of the default a.out.


2. cat test
cat: Reads and prints the contents of a file directly to your terminal.
test: The compiled binary executable created in the previous step.
Result: Because test is a compiled binary file containing raw machine code (bytes) rather than plain text, running cat test will dump binary characters to your screen. This often displays garbled symbols or text artifacts and may mess up your terminal's display. 

*/
