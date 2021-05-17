import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <footer className="height-12vh w-100 d-flex justify-content-center align-items-center">
            <div className="h-100 w-100 wrapper d-flex justify-content-between align-items-center">
                <div className="sayHi">
                    <Link to="/thanks" className="size-20">
                        <span>thanks.</span>
                    </Link>
                </div>

                <div className="sayHi">
                    <Link to="/products" className="size-20">
                        <span>products.</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
