import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {
    return (
        <header>
        <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container d-flex justify-content-between">
                <NavLink to="/" className="navbar-brand d-flex align-items-center" exact activeStyle={{color:'red'}}>
                <strong>TodoList</strong>
                </NavLink>

                <NavLink to="/News" className="navbar-brand d-flex align-items-center">
                <strong>TodoList</strong>
                </NavLink>
                <Link to={
                    {
                        pathname:"/about",
                        search:"/id=20&Nme=yasaman"
                    }
                } className="navbar-brand d-flex align-items-center">
                <strong>About</strong>
                </Link>
                <Link to={location=>`/ConatactUs${location.search}`} className="navbar-brand d-flex align-items-center">
                <strong>Contact Us</strong>
               </Link>
            </div>
        </div>
    </header>
    )
}

export default Header
