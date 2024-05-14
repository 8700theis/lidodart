import React from 'react';
import './burgermenu.css';

export default function Hamburgermenu({ handleBurgerClick, isBurgerActive }) {

    const handleBurgerClickChild = () => {
        handleBurgerClick();
    }

    return (
        <div className='hamburgerLines' onClick={handleBurgerClickChild}>
            <span className={isBurgerActive ? 'line line1 active' : 'line line1'}></span>
            <span className={isBurgerActive ? 'line line2 active' : 'line line1'}></span>
            <span className={isBurgerActive ? 'line line3 active' : 'line line1'}></span>
        </div>
    )
}