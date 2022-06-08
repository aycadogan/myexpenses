import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

import React from 'react'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myExpenses</li>
        <li>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </li>
      </ul>
    </nav>
  )
}
