import React from 'react'
import logo from '../../images/logo.svg'

import './Header.scss'

function Header() {
  return (
    <h1 className='header__logo'>
        <img src={logo} alt="Splitter logo" />
    </h1>
  )
}

export default Header