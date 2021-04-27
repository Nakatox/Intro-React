import React from 'react'
import {NavLink} from "react-router-dom"

const Naviguation = () => {
    return (
        <div className="naviguation">
            <NavLink exact to="/" activeClassName="nav-active">
                Acceuil
            </NavLink>
            <NavLink exact to="About" activeClassName="nav-active">
                About
            </NavLink>
            <NavLink exact to="Crypto" activeClassName="nav-active">
                Crypto
            </NavLink>
        </div>
    )
}

export default Naviguation
