const { useState, useEffect } = require('react');

export const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item.length > 0) {
      setState(parse(item));
    }
  }, []);

  useEffect(() => {
    if (state.length > 0) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state]);

  return [state, setState];
};

const parse = (state) => {
  try {
    return JSON.parse(state);
  } catch {
    return state;
  }
};
