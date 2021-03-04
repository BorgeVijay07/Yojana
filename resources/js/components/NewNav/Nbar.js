import React, {useState} from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './Nbar.css'

function Nbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return(
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    YOJANA
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-items">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/schemes' className="nav-links" onClick={closeMobileMenu}>
                            Schemes 
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/contact-us' className="nav-links" onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up                        
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    )
}

export default Nbar;
