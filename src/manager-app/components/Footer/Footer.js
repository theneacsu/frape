import React from 'react'
import styles from './Footer.module.css'

const Footer = () => (
  <div className={styles.div}>
    Made with{' '}
    <img className={styles.icon} src="images/like.png" alt="heart icon" /> and{' '}
    <img className={styles.icon} src="images/coffee.png" alt="coffee icon" /> by
    Neacsu Alexandru
  </div>
)

export default Footer
