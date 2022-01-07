import { useEffect } from "react";
import { ReadyContext } from "../context/readyContext";

import { useContext } from "react";

export default function useTimeout(delay) {
  const [ready, setReady] = useContext(ReadyContext);
  
  useEffect(() => {
    if (delay > 0) {
      setTimeout(() => {
        setReady(true);
      }, delay);
    }
  }, []);

  return ready;
}
