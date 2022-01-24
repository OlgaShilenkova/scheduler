import { useState } from "react";

// if you use export default -> in test file import useVisualMode without {}

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    //replace the current mode in the history with a new one
    if (replace) {
      const newHistory = [...history];
      newHistory.pop();
      newHistory.push(newMode);
      setHistory(newHistory);
    } else {
      //add the new mode to our history array
      const newHistory = [...history, newMode];
      setHistory(newHistory);
    }
  }

  function back() {
    if (history.length < 2) {
      return;
    }
    const newHistory = [...history];
    newHistory.pop();
    setMode(newHistory[newHistory.length - 1]);
    setHistory(newHistory);
  }

  return {
    mode,
    transition,
    back,
  };
}
