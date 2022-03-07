import React from 'react'
import classes from './Header.module.css'
import HeaderCart from './HeaderCart'

const Header = () => {
  return (
    <>
        <header className={classes.header}>
            <h1>책 주문 앱</h1>
            <HeaderCart />

        </header>
    </>
  )
}

export default Header