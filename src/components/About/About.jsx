import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <section id="nosotros" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Somos el Socio Tecnológico del Agricultor</h2>
        <div className={styles.contenido}>
          <p className={styles.descripcion}>
            Eco Drone no es solo una empresa de fumigación; somos innovadores con una misión clara: 
            potenciar la agricultura en Chalatenango. Dejamos atrás los métodos tradicionales, que son 
            peligrosos y costosos, para introducir la agricultura de precisión. Protegemos la salud de 
            los productores y la rentabilidad de sus cultivos (maíz, frijol, hortalizas) con tecnología 
            aérea eficiente y sostenible.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About