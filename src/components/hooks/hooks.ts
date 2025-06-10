import {useState, useCallback, useRef, useEffect } from 'react';
import { OpenFileInterface } from "../../types/globalTypes";
import { FileIconInterface } from "../../components/window/windowTypes";
/* 
  - Hook by Anil Kumar Chaudhary - adapted to fit project needs. 
    https://simbathesailor.dev/ 
*/
export const useDoubleClick = (callback: () => void, eventType: string) => {
  /** callback ref Pattern **/
  const [elem, setElem] = useState<HTMLElement | null>(null);
  
  const callbackRef = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      setElem(node);
    }
  }, []);

  const countRef = useRef(0);
/** Refs for the timer **/
  const timerRef = useRef<number | undefined>(undefined);
/** Input callback Ref for callback passed **/
  const inputCallbackRef = useRef<(() => void) | null>(null);
  
  useEffect(() => {
    inputCallbackRef.current = callback;
  }, [callback]);
  
  useEffect(() => {
    function handler() {
      const isDoubleClick = countRef.current + 1 === 2;
      const timerIsPresent = timerRef.current;
      if (timerIsPresent && isDoubleClick) {
        clearTimeout(timerRef.current);
        timerRef.current = undefined;
        countRef.current = 0;
        if (inputCallbackRef.current) {
          inputCallbackRef.current();
        }
      }
      if (!timerIsPresent) {
        countRef.current = countRef.current + 1;
        const timer = setTimeout(() => {
          clearTimeout(timerRef.current);
          timerRef.current = undefined;
          countRef.current = 0;
        }, 200);
        timerRef.current = timer;
      }
    }
    if (elem) {
      elem.addEventListener(eventType, handler);
    }
    return () => {
      if (elem) {
        elem.removeEventListener(eventType, handler);
      }
    }
  }, [elem, eventType]);
  // [callbackRef, elem]
  return [callbackRef];
}


export const useWindowState = () => {
  const [allOpenWindows, setAllOpenWindows] = useState<Record<string, { type: string; data: OpenFileInterface | FileIconInterface[] }>>({});

  const addWindow = ({ type, key, data }: { type: string; key: string; data: OpenFileInterface | FileIconInterface[] }) => {
    setAllOpenWindows(prevState => ({
      ...prevState,
      [key]: { type, data }
    }));
  };

  const closeWindow = (windowName: string) => {
    setAllOpenWindows(prevState => {
      const newState = { ...prevState };
      delete newState[windowName];
      return newState;
    });
  };

  return { allOpenWindows, addWindow, closeWindow }
}
