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

    /* 

    if(__PLATFORM__ === 'desktop'){
        return <div>ISDESKTOPPLATFORM</div>
    }

    if(__PLATFORM__ === 'mobile'){
        return <div>ISMOBILEPLATFORM</div>
    } */

    function TODO1() {
        TODO2()
    }
    function TODO2() {
        throw new Error();
    }

    return (
        <div data-testid={'App'}>
            <h1>platform={__PLATFORM__}</h1>
            <div className={classes.images}>
                <img src={AvatarPng} alt='png'/>
                <img src={AvatarJpg} alt="jpg" />
            </div>
            zaebalsya
            <div>
                <PhoneSvg width={100} height={100} fill={'tan'}/>
            </div>
            <Link to='/about'>About</Link>
            <br />
            <Link to='/shop'>Shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button data-testid={'button1'} className={classes.button} onClick={/* increment */ TODO1}>+</button>
            <button data-testid={'button2s'} className={classes.button} onClick={decrement}>-</button>

            <Outlet/>
        </div>
    );
};
