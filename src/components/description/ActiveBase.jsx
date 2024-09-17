import { useState } from 'react';

export function ChangeActiveObj(initialState = false, customAction = () => {}) {
  const [state, setState] = useState(initialState);

  const toggleActive = () => {
    customAction(); // Execute custom action
    setState(prev => !prev);
  };

  return { state, toggleActive };
}