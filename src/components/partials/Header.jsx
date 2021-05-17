import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
    return(
        <header className="height-12vh w-100 d-flex justify-content-center align-items-center">
            <div className="h-100 w-100 wrapper d-flex justify-content-between align-items-center">
                <Link to="/">
                    <img src={logo} alt="logo" className="logo"/>
                </Link>
                <div className="sayHi">
                    <Link to="/sayHi" className="size-20">
                        <span>say </span>
                        <span>hi.</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
