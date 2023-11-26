/* eslint-disable no-restricted-globals */

/**
 *
 * @param e
 */
self.onmessage = (e: MessageEvent<number>) => {
  self.postMessage({
    n: e.data,
    term: fibonacci(e.data),
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
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

export {};
