import { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <button onClick={increment} className={`${classes.btn} ${classes.green}`}>
        Добавить
      </button>
      <h1>{count}</h1>
      <button onClick={decrement}>Уменьшить</button>
    </div>
  );
};

export { Counter };
