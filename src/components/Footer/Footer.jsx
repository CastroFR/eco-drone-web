import React, { useState } from 'react'
import styles from './Footer.module.css'
import { FaHelicopter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'

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
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
    setFormData({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.container}>
        
        {/* Sección principal del footer */}
        <div className={styles.footerMain}>
          
          {/* Información de la empresa */}
          <div className={styles.companyInfo}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}><FaHelicopter /></span>
              <span className={styles.logoText}>ECO DRONE</span>
            </div>
            <p className={styles.companyDescription}>
              Líderes en servicios de fumigación con drones para agricultura de precisión. 
              Maximizamos tu productividad con tecnología avanzada y soluciones sostenibles.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><FaEnvelope /></span>
                <span>info@ecodrone.com</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><FaPhone /></span>
                <span>+503 1234-5678</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><FaMapMarkerAlt /></span>
                <span>Chalatenango, El Salvador</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Enlaces Rápidos</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#problema">Ventajas</a></li>
              <li><a href="#solucion">Servicios</a></li>
              <li><a href="#viabilidad">Resultados</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Nuestros Servicios</h4>
            <ul className={styles.footerLinks}>
              <li>Fumigación de Precisión</li>
              <li>Monitoreo de Cultivos</li>
              <li>Análisis Multiespectral</li>
              <li>Mapeo de Terrenos</li>
              <li>Asesoría Técnica</li>
              <li>Capacitación</li>
            </ul>
          </div>

          {/* Formulario de contacto */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contáctanos</h4>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre completo"
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
                  placeholder="correo@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows="3"
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

        {/* Línea separadora */}
        <div className={styles.footerDivider}></div>

        {/* Sección inferior */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; 2025 Eco Drone. Todos los derechos reservados.</p>
            <p className={styles.legalText}>
              Especialistas en agricultura de precisión con drones.
            </p>
          </div>
          
          <div className={styles.socialMedia}>
            <h5 className={styles.socialTitle}>Síguenos en:</h5>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <span className={styles.socialIcon}><FaFacebook /></span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <span className={styles.socialIcon}><FaInstagram /></span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="WhatsApp">
                <span className={styles.socialIcon}><FaWhatsapp /></span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <span className={styles.socialIcon}><FaYoutube /></span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer