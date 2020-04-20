import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/" style={{color:"white"}}>Home</Link></li>
                    <li><Link to="/about" style={{color:"white"}}>About</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
