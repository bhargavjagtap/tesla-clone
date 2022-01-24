import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HeaderBlock from './HeaderBlock'
import Menu from './Menu'

function Header ({isMenuOpen, setIsMenuOpen})  {
    return (
        <>
        <div className="header">
            <div className="header_logo">
                <Link to='/'>
                    <img 
                    className="header_logoImg" 
                    src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" 
                    alt="" />
                </Link>
            </div>
            <div className='header_links'>
                <Link to='/'>Model S</Link>
                <Link to='/'>Model 3</Link>
                <Link to='/'>Model X</Link>
                <Link to='/'>Model Y</Link>
                <Link to='/'>Solar Roof</Link>
                <Link to='/'>Solar Panels</Link>
            </div>
            <div className='header_right'>
                <Link className={isMenuOpen && 'header_link--hidden'} to='/'>Shop</Link>
                <Link className={isMenuOpen && 'header_link--hidden'} to='/Login'>Tesla Account</Link>
            <div className="header_menu" 
                 onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <CloseIcon/> : <MenuIcon/>}
            </div>
            </div>
        </div>
        <HeaderBlock/> 
        {isMenuOpen && <Menu />}
        </>
    )
}

export default Header
