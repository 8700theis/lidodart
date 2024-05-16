import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Burgermenu from './Burgermenu';
// import logo from './assets/lidodart-logo.webp';
import logo from './assets/lidodart-logoYellow.png';
import './navbar.css';

export default function Navbar() {
    const [burgerNavActive, setBurgerNavActive] = useState(false);

    const handleBurgerClick = () => {
        setBurgerNavActive(current => !current);
    }

    const handleLogoClick = () => {
        setBurgerNavActive(false);
    }

    return (
        <section id='navbar'>
            <div className="navberLogoContainer">
                <Link to='/'><img src={logo} alt="Logo" onClick={() => handleLogoClick()} /></Link>
            </div>
            <div className={burgerNavActive ? 'navbarLinksContainer active' : 'navbarLinksContainer'}>
                <ul className="navbarLinksWrapper">
                    <div>
                        <CustomLink to='/bliv-medlem-af-lido-dartklub' onClick={() => handleBurgerClick()}>Bliv medlem</CustomLink>
                        <CustomLink to='/nyheder' onClick={() => handleBurgerClick()}>Nyheder</CustomLink>
                        <CustomLink to='/sponsorer' onClick={() => handleBurgerClick()}>Sponsorer</CustomLink>
                        <CustomLink to='/om-lido-dartklub' onClick={() => handleBurgerClick()}>Om Lido Dartklub</CustomLink>
                        <CustomLink to='/kontakt-lido-dartklub' onClick={() => handleBurgerClick()}>Kontakt os</CustomLink>
                    </div>
                </ul>
            </div>
            <Burgermenu handleBurgerClick={handleBurgerClick} isBurgerActive={burgerNavActive} />
        </section>
    )
}

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? 'active' : ''}>
            <Link className='navbarLink' to={to} {...props}>{children}</Link>
        </li>
    )
}
