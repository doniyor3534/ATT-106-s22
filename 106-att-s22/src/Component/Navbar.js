import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <NavLink to='/' className={'logo'} >ATT-106-s22</NavLink>
        <ul>
            <a href="sec1">Home</a>
            <a href="sec1">Game</a>
            <a href="sec1">Bizning jamoa</a>
            <a href="sec1">Biz bilan boglaning</a>
        </ul>
    </nav>
  )
}
