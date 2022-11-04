import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAVLINK } from './Data'


const NavMenu = () => {
    return (
        <ul>
            {
                NAVLINK.map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }
        </ul>

    )
}

export default NavMenu