---
title: C Cheatsheet
---

Published on December 23, 2020

_This document was migrated from [DigiDocs](https://digipie.github.io/digidocs/c/arguments/)_

## Print out arguments

The example program below prints out all command line arguments passed into the `main()` function.

**print-arguments.c**

```c
#include <stdio.h>

int main(int argc, char **argv) {
    for (int i = 0; i < argc; i++) {
        printf("%s\n", argv[i]);
    }
}
```

Key details:

- `argc` - the number of arguments passed into the program
- `argv` - the array of character pointers (strings) containing all arguments
- `argv[0]` - the first argument which is also the name of the program

To use:

- Enter the above code into a file (e.g. `print-arguments.c`).
- Compile the code with `gcc print-arguments.c -o print-arguments`.
- Run the executable with `./print-arguments test` or `./print-arguments $USER`.

## Resources

- [Original copy of this document at DigiDocs](https://digipie.github.io/digidocs/c/arguments/)
