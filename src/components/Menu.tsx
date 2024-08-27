import React from 'react'
import styles from './component.module.css'

const Menu:React.FC = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuItems}>
        <h4>Shop</h4>
        <h4>Skills</h4>
        <h4>Stores</h4>
        <h4>About</h4>
        <h4>Contact Us</h4>
      </div>
    </div>
  )
}

export default Menu
