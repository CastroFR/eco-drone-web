import React from 'react'
import Card from '../Card/Card'
import { IconoPrecision } from '../icons/IconoPrecision'
import { IconoRapidez } from '../icons/IconoRapidez'
import { IconoSeguridad } from '../icons/IconoSeguridad'
import styles from './Solution.module.css'

const Solution = () => {
  const soluciones = [
    {
      icono: IconoPrecision,
      titulo: "Precisión",
      descripcion: "90% menos agua con aplicación dirigida y controlada mediante GPS."
    },
    {
      icono: IconoRapidez,
      titulo: "Rapidez",
      descripcion: "Minutos, no horas. Cobertura completa de una manzana en solo 15 minutos."
    },
    {
      icono: IconoSeguridad,
      titulo: "Seguridad",
      descripcion: "100% menos exposición directa a productos químicos para los agricultores."
    }
  ]

  return (
    <section id="solucion" className={styles.solution}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>La Solución: Eco Drone</h2>
        <div className={styles.grid}>
          {soluciones.map((solucion, index) => (
            <Card
              key={index}
              icono={solucion.icono}
              titulo={solucion.titulo}
              descripcion={solucion.descripcion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solution