import { useEffect, useMemo, useState } from "react";

export function App() {
  // user input
  const [n, updateN] = useState<number | undefined>(undefined);
  // solution from worker
  const [ans, updateAns] = useState<{ term: number; n: number } | undefined>(
    undefined
  );
  
  // fibonacci worker
  const computeFib: Worker = useMemo(
    () => new Worker(new URL("./fibonacci-worker.ts", import.meta.url)),
    []
  );
  // gets result from worker
  useEffect(() => {
    if (window.Worker) {
      computeFib.onmessage = (
        e: MessageEvent<{ term: number; n: number } | undefined>
      ) => {
        updateAns(e.data);
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
          // update input
          updateN(+e.target.value);
          // call worker
          computeFib.postMessage(+e.target.value);
        }}
        type="number"
        value={n}
      />
      <div>
        {ans?(
          <>
            <i>sequence term #{ans.n}: </i>
            <b>{ans.term}</b>
          </>
        ):<i>Tip: start from 35 and increase gradually</i>}
      </div>
    </div>
  );
}
