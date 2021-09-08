import React from 'react'
import classes from './Header.module.css'

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <a href=''>LOGO</a>
      </div>
      <div className={classes.headerRight}>
        <button>settings</button>
      </div>
    </header>
  )
}
