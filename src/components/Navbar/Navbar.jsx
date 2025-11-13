import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detectar sección activa con mejor precisión
      const sections = ['inicio', 'nosotros', 'problema', 'solucion', 'viabilidad', 'contacto']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Altura del navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    closeMenu()
  }

  return (
    <nav id="navbar" className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a 
            href="#inicio" 
            onClick={(e) => { 
              e.preventDefault(); 
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            ECO DRONE
          </a>
        </div>
        
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}>
          {[
            { id: 'nosotros', label: 'Nosotros' },
            { id: 'problema', label: 'Ventajas' },
            { id: 'solucion', label: 'Servicios' },
            { id: 'viabilidad', label: 'Resultados' },
            { id: 'contacto', label: 'Contacto' }
          ].map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className={activeSection === item.id ? styles.active : ''}
                onClick={(e) => { 
                  e.preventDefault(); 
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div 
          className={`${styles.hamburger} ${isMenuOpen ? styles.toggle : ''}`}
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar