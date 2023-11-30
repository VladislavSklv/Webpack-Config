import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import AvatarPng from "@/assets/avatar.png";
import AvatarJpg from "@/assets/avatar.jpg";
import PhoneSvg from "@/assets/phone.svg";


export const App: React.FC = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)

    return (
        <div>
            <div className={classes.images}>
                <img src={AvatarPng} alt='png'/>
                <img src={AvatarJpg} alt="jpg" />
            </div>
            <div>
                <PhoneSvg width={100} height={100} fill={'cyan'}/>
            </div>
            <Link to='/about'>About</Link>
            <br />
            <Link to='/shop'>Shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>+</button>
            <button className={classes.button} onClick={decrement}>-</button>

            <Outlet/>
        </div>
    );
};
