import React from 'react'
import {Link} from 'react-router-dom'
import inStockLogo from '../../assets/Logo/InStock-Logo.svg'
import './Header.scss'

export default function Header() {
    return (
        <header className='header'>
            <Link className='logo__link'>
                <img className='logo__image' src={inStockLogo} alt='inStock-log'/>
            </Link>
            <ul className='header__list'>
                <Link className='list__warehouses'>
                    <li className='list__text'>Warehouses</li>
                </Link>
                <Link className='list__inventory'>
                    <li className='list__text'>Inventory</li>
                </Link>
            </ul>
            
        </header>
    )
}
