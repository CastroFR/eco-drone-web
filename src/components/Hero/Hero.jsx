import React, { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Eficiencia', 'Precisión', 'Tecnología', 'Sostenibilidad']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.badge} data-aos="fade-down">
          <span>🚀 Innovación Agrícola</span>
        </div>
        
        <h1 className={styles.tituloHero} data-aos="fade-up">
          Revolucionamos la <span className={styles.highlight}>Agricultura</span> en Chalatenango
        </h1>
        
        <div className={styles.animatedText} data-aos="fade-up" data-aos-delay="200">
          <span>Con </span>
          <span className={styles.wordCycle}>{words[currentWord]}</span>
        </div>
        
        <p className={styles.subtituloHero} data-aos="fade-up" data-aos-delay="400">
          Servicios profesionales de fumigación con drones para maximizar tu productividad 
          y reducir costos hasta en un 60%
        </p>
        
        <div className={styles.ctaContainer} data-aos="fade-up" data-aos-delay="600">
          <a href="#contacto" className={styles.ctaPrimary}>
            📞 Cotizar Ahora
          </a>
          <a href="#solucion" className={styles.ctaSecondary}>
            🎬 Ver Demo
          </a>
        </div>

        <div className={styles.stats} data-aos="fade-up" data-aos-delay="800">
          <div className={styles.stat}>
            <strong>+50</strong>
            <span>Clientes Satisfechos</span>
          </div>
          <div className={styles.stat}>
            <strong>90%</strong>
            <span>Menos Agua</span>
          </div>
          <div className={styles.stat}>
            <strong>24/7</strong>
            <span>Soporte</span>
          </div>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </section>
  )
}

export default Hero