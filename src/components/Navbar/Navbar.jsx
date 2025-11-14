import React, { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 90
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('inicio') }}>
            ECO DRONE
          </a>
        </div>
        
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}>
          <li><a onClick={(e) => { e.preventDefault(); scrollToSection('inicio') }}>Inicio</a></li>
          <li><a onClick={(e) => { e.preventDefault(); scrollToSection('nosotros') }}>Nosotros</a></li>
          <li><a onClick={(e) => { e.preventDefault(); scrollToSection('problema') }}>Ventajas</a></li>
          <li><a onClick={(e) => { e.preventDefault(); scrollToSection('solucion') }}>Servicios</a></li>
          <li><a onClick={(e) => { e.preventDefault(); scrollToSection('viabilidad') }}>Resultados</a></li>
          <li><a onClick={(e) => { e.preventDefault(); scrollToSection('contacto') }}>Contacto</a></li>
        </ul>

        <div className={`${styles.hamburger} ${isMenuOpen ? styles.toggle : ''}`}
             onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar