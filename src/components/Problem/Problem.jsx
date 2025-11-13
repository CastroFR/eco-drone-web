import React from 'react'
import Card from '../Card/Card'
import styles from './Problem.module.css'

const Problem = () => {
  const ventajas = [
    {
      titulo: "🚀 Eficiencia Extrema",
      descripcion: "Cubre 10x más rápido que métodos tradicionales. Una manzana en 15 minutos vs 4 horas manuales."
    },
    {
      titulo: "💰 Ahorro Garantizado",
      descripcion: "Reduce hasta 90% en consumo de agua y 60% en productos. Máximo rendimiento con mínimo costo."
    },
    {
      titulo: "🎯 Precisión Total",
      descripcion: "Tecnología GPS que elimina el desperdicio. Cada gota llega exactamente donde se necesita."
    }
  ]

  return (
    <section id="problema" className={styles.ventajas}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>¿Por Qué Somos Tu Mejor Elección?</h2>
        <p className={styles.subtitulo}>
          Transformamos desafíos agrícolas en oportunidades de crecimiento
        </p>
        
        <div className={styles.grid}>
          {ventajas.map((ventaja, index) => (
            <Card
              key={index}
              titulo={ventaja.titulo}
              descripcion={ventaja.descripcion}
            />
          ))}
        </div>

        <div className={styles.comparison}>
          <h3>Comparativa de Resultados</h3>
          <div className={styles.comparisonGrid}>
            <div className={styles.method}>
              <h4>Método Tradicional</h4>
              <ul>
                <li>⏱️ 4-6 horas por manzana</li>
                <li>💧 200L de agua consumidos</li>
                <li>⚠️ Riesgo para la salud</li>
                <li>🎯 60% de cobertura efectiva</li>
              </ul>
            </div>
            <div className={styles.vs}>VS</div>
            <div className={styles.method}>
              <h4>Con Eco Drone</h4>
              <ul>
                <li>⏱️ 15 minutos por manzana</li>
                <li>💧 20L de agua consumidos</li>
                <li>✅ Cero riesgo operativo</li>
                <li>🎯 95% de cobertura efectiva</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem