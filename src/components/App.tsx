import { useState } from 'react';
import classes from './App.module.scss';

export const App: React.FC = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)

    return (
        <div>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>+</button>
            <button className={classes.button} onClick={decrement}>-</button>
        </div>
    );
};
