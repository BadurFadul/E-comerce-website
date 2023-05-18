import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>products page</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/card"}>cart</Link>
        </nav>
    </header>
  )
}

export default Header