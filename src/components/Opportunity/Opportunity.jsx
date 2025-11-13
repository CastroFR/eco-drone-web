import React from 'react'
import styles from './Opportunity.module.css'

const Opportunity = () => {
  return (
    <section id="viabilidad" className={styles.opportunity}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Una Oportunidad Validada</h2>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.numero}>+5,000</span>
            <p className={styles.subtexto}>Productores objetivo</p>
          </div>
          <div className={styles.stat}>
            <span className={styles.numero}>65%</span>
            <p className={styles.subtexto}>Disposición a adoptar la tecnología</p>
          </div>
          <div className={styles.stat}>
            <span className={styles.numero}>$25 / Manzana</span>
            <p className={styles.subtexto}>Nuestro precio de servicio competitivo</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Opportunity