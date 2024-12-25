# TypeScript Type Safety Limitation: Unexpected String Concatenation with Arrays

This example demonstrates a subtle issue in TypeScript where type safety doesn't fully prevent unexpected behavior at runtime.  While TypeScript's type system helps catch many errors during development, it doesn't guarantee the complete absence of runtime issues related to type coercion.

The `greeter` function expects a string argument. However, passing an array to it will still compile due to TypeScript's type coercion. The array will be converted to a string in an unexpected way.

## Solution

The solution involves adding a type guard or input validation to check the data type before performing the operation. See the `bugSolution.ts` file for an example using a type guard.