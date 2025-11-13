import React, { useState } from 'react'
import styles from './Card.module.css'

const Card = ({ titulo, descripcion, icono: Icono }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
    >
      <div className={styles.cardHeader}>
        {Icono && <Icono className={styles.icono} />}
        <h3 className={styles.titulo}>{titulo}</h3>
      </div>
      <p className={styles.descripcion}>{descripcion}</p>
      
      <div className={`${styles.cardHover} ${isHovered ? styles.hoverActive : ''}`}>
        <div className={styles.hoverEffect}></div>
      </div>
    </div>
  )
}

export default Card