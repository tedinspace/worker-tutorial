/* eslint-disable no-restricted-globals */
// ^^^ have this at the top of your file so TypeScript doesn't complain

/**
 * api for accessing worker; 
 * all web workers need to follow this recipe: 
 * self.onmessage = (e: MessageEvent<your data type>) =>{ self.postMessage(...)}
 * @param e
 */
self.onmessage = (e: MessageEvent<number>) => {
  self.postMessage({
    n: e.data, // records which term is computed
    term: fibonacci(e.data), // calls the fibonacci code and posts when finished
  });
};

/**
 * this function recursively does the computation for fibonacci
 *
 * This function could be imported into this file from another
 * @param n
 * @returns
 */
const fibonacci = (n: number): number => {
  if (n < 2) { // stopping condition
    return n;
  } else { // recurse
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

export {};
