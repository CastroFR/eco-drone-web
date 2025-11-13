import React, { useState } from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
    setFormData({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contactForm}>
            <h3 className={styles.formTitle}>Contáctanos</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  name="mensaje"
                  placeholder="Tu mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className={styles.textarea}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© 2025 Eco Drone. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer