import { useState } from "react";

// if you use export default -> in test file import useVisualMode without {}

export function useVisualMode(initial) {
  // const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    // DID NOT GET YET
    // replace the current mode in the history with a new one
    // if (replace) {
    //   const newHistory = [...history, newMode];
    //   console.log("newHistory", newHistory);

    //   newHistory.pop();
    //   console.log("newHistory after pop", newHistory);

    //   const newHistory1 = [...newHistory, newMode];
    //   console.log("newHistory1 after spread and add mewMode", newHistory1);

    //   setHistory(newHistory1);
    //   console.log("newHistory1", newHistory1);
    // }
    //add the new mode to our history array
    const newHistory = [...history, newMode];
    setHistory(newHistory);
  }

  function back() {
    if (history.length < 2) {
      return;
    }
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
  }

  const mode = history[history.length - 1];

  return {
    mode,
    transition,
    back,
  };
}
