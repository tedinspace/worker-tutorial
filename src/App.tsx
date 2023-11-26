import { useEffect, useMemo, useState } from "react";

export function App() {
  // user input: store and update desired term to compute
  const [n, updateN] = useState<number | undefined>(undefined);
  // solution from worker: stores the answer of most recently complete web worker call
  const [ans, updateAns] = useState<{ term: number; n: number } | undefined>(
    undefined
  );

  // fibonacci worker: instantiate your worker in this manner
  const computeFib: Worker = useMemo(
    () => new Worker(new URL("./fibonacci-worker.ts", import.meta.url)),
    []
  );
  // listen for and store results from worker (updateAns(...))
  useEffect(() => {
    if (window.Worker) {
      computeFib.onmessage = (
        e: MessageEvent<{ term: number; n: number } | undefined>
      ) => {
        updateAns(e.data); // store results
      };
    }
  }, [computeFib]);
  return (
    <div>
      <div>
        <b>
          computes i<i>th</i> term of
          <br />
          <a href="https://en.wikipedia.org/wiki/Fibonacci_sequence">
            Fibonacci Sequence
          </a>
        </b>
      </div>
      <input // styled in index.css
        onChange={(e) => {
          // update input as user changes it
          updateN(+e.target.value);
          // call worker as user changes input
          computeFib.postMessage(+e.target.value);
        }}
        type="number"
        value={n}
      />
      <div>
        {ans ? (
          <>
            <i>sequence term #{ans.n}: </i>
            <b>{ans.term}</b>
          </>
        ) : (
          <i>Tip: start from 35 and increase gradually</i>
        )}
      </div>
    </div>
  );
}
