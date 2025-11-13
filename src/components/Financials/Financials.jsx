import React from 'react'
import styles from './Financials.module.css'

const Financials = () => {
  return (
    <section className={styles.resultados}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Resultados que Hablan por Sí Solos</h2>
        <p className={styles.subtitulo}>
          Miles de manzanas cultivadas con éxito en Chalatenango
        </p>
        
        <div className={styles.kpis}>
          <div className={styles.kpi} data-aos="fade-up">
            <span className={styles.numero}>+500</span>
            <p className={styles.subtexto}>Manzanas Servidas</p>
            <div className={styles.kpiBar}>
              <div className={styles.kpiFill} style={{width: '100%'}}></div>
            </div>
          </div>
          <div className={styles.kpi} data-aos="fade-up" data-aos-delay="200">
            <span className={styles.numero}>95%</span>
            <p className={styles.subtexto}>Clientes Satisfechos</p>
            <div className={styles.kpiBar}>
              <div className={styles.kpiFill} style={{width: '95%'}}></div>
            </div>
          </div>
          <div className={styles.kpi} data-aos="fade-up" data-aos-delay="400">
            <span className={styles.numero}>60%</span>
            <p className={styles.subtexto}>Ahorro en Costos</p>
            <div className={styles.kpiBar}>
              <div className={styles.kpiFill} style={{width: '60%'}}></div>
            </div>
          </div>
        </div>

        <div className={styles.testimonios}>
          <h3>Lo que Dicen Nuestros Clientes</h3>
          <div className={styles.testimonioGrid}>
            <div className={styles.testimonio} data-aos="fade-right">
              <div className={styles.quote}>"</div>
              <p>Eco Drone revolucionó mi cultivo de maíz. De 40 quintales pasé a 65 por manzana con menos gastos."</p>
              <div className={styles.cliente}>
                <strong>Don Miguel Hernández</strong>
                <span>Productor de Maíz, La Palma</span>
              </div>
            </div>
            <div className={styles.testimonio} data-aos="fade-left">
              <div className={styles.quote}>"</div>
              <p>La precisión de los drones eliminó el desperdicio que tenía con la fumigación manual. Excelente servicio."</p>
              <div className={styles.cliente}>
                <strong>Ing. Carlos Rivera</strong>
                <span>Cultivo de Hortalizas, Dulce Nombre de María</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Financials