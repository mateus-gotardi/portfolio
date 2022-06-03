import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/header.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    const [burger, setBurger] = useState('Menu')
    const handleBurger = () => {
        if (burger === 'Menu') {
            setBurger('MenuActive')
        } else {
            setBurger('Menu')
        }
    }
    return (
        <header className="Header">
            <Link to='/' className="logo">&lt;MG/&gt;</Link>
            <nav id="nav" className={`nav${burger}`}>
                <button className='burgerButton' onClick={handleBurger}>
                    {burger === 'Menu' ? <GiHamburgerMenu className="bIcon" /> :
                        <AiOutlineClose className="bIcon" />}
                </button>
                <ul id='menu'>
                    <li><Link to='/projetos'>Projetos</Link></li>
                    <li><Link to='/contato'>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header