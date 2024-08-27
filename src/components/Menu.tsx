import React from 'react'
import styles from './component.module.css'

const Menu:React.FC = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuItems}>
        <h3>Shop</h3>
        <h3>Skills</h3>
        <h3>Stores</h3>
        <h3>About</h3>
        <h3>Contact Us</h3>
      </div>
    </div>
  )
}

export default Menu
