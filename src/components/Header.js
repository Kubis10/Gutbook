import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/book-icon.png'

const Header = () => {
    return (
        <header className="header">
            <nav>
                <img className='logo' src={Logo} alt='LOGO' style={{ width: "40px" }} />
                <Link to="/">Home</Link>
                <Link to="/books">Books</Link>
                <Link to="/favorites">Favorites</Link>
            </nav>
        </header>
    )
}

export default Header