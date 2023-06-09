import { Task } from "@/interfaces";

const { useState, useEffect } = require('react');

export const useLocalStorage = (key: string, initialState: any) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const item = localStorage.getItem(key) as Task[] | null;
    if (item && item.length > 0) {
      setState(parse(item));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

const parse = (state: any) => {
  try {
    return JSON.parse(state);
  } catch {
    return state;
  }
};
