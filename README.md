# 🚁 Eco Drone - Soluciones Agrícolas de Precisión

![Eco Drone](https://img.shields.io/badge/version-1.0.0-green)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.2-purple)
![License](https://img.shields.io/badge/license-MIT-green)

**Revolución de la agricultura mediante tecnología de drones de precisión para maximizar productividad y reducir costos.**

> Líderes en servicios de fumigación con drones para agricultura de precisión en Chalatenango, El Salvador.

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Componentes Principales](#componentes-principales)
- [Configuración](#configuración)
- [Despliegue](#despliegue)
- [Contribuciones](#contribuciones)
- [Contacto](#contacto)

---

## ✨ Características

### 🎯 Soluciones Principales

- **Fumigación de Precisión**: Cobertura del 95% con GPS controlado
- **Monitoreo de Cultivos**: Seguimiento en tiempo real de tus parcelas
- **Análisis Multiespectral**: Datos detallados sobre salud de cultivos
- **Mapeo de Terrenos**: Cartografía aérea de alta resolución
- **Asesoría Técnica**: Soporte profesional 24/7
- **Capacitación**: Programas de entrenamiento para agricultores

### 📊 Resultados Comprobados

- ✅ **+500 hectáreas** servidas exitosamente
- ✅ **95% de clientes** satisfechos
- ✅ **60% de ahorro** en costos de fumigación
- ✅ **90% menos agua** consumida
- ✅ **15 minutos** para fumigar 1 manzana (vs 4-6 horas métodos tradicionales)

### 🎨 Interfaz Moderna

- Diseño responsivo (mobile-first)
- Animaciones suaves con AOS
- Tema oscuro profesional
- Experiencia de usuario optimizada
- Formulario de contacto integrado

---

## 🔧 Requisitos Previos

Antes de empezar, asegúrate de tener instalados:

- **Node.js** (v16 o superior)
- **npm** (v7 o superior) o **yarn**
- **Git**
- Navegador moderno (Chrome, Firefox, Safari, Edge)

```bash
# Verificar instalación
node --version
npm --version
```

---

## 📦 Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/eco-drone-web.git
cd eco-drone-web
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configuración de Variables de Entorno

Crear archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Eco Drone
```

### 4. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 📁 Estructura del Proyecto

```
eco-drone-web/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.module.css
│   │   ├── Problem/
│   │   │   ├── Problem.jsx
│   │   │   └── Problem.module.css
│   │   ├── Solution/
│   │   │   ├── Solution.jsx
│   │   │   └── Solution.module.css
│   │   ├── Opportunity/
│   │   │   ├── Opportunity.jsx
│   │   │   └── Opportunity.module.css
│   │   ├── Financials/
│   │   │   ├── Financials.jsx
│   │   │   └── Financials.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.module.css
│   │   └── icons/
│   │       ├── IconoPrecision.jsx
│   │       ├── IconoRapidez.jsx
│   │       └── IconoSeguridad.jsx
│   ├── assets/
│   │   └── hero-bg.jpg
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
│   └── vite.svg
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

---

## 🚀 Scripts Disponibles

### Desarrollo

```bash
# Inicia el servidor de desarrollo con hot-reload
npm run dev
```

### Construcción

```bash
# Compila para producción
npm run build
```

### Vista Previa

```bash
# Previsualiza la build de producción
npm run preview
```

### Linting

```bash
# Ejecuta ESLint para revisar código
npm run lint
```

---

## 🛠️ Tecnologías Utilizadas

### Frontend

| Tecnología | Versión | Descripción |
|-----------|---------|-------------|
| **React** | 19.2.0 | Librería de interfaz de usuario |
| **Vite** | 7.2.2 | Herramienta de construcción rápida |
| **React Router** | 6.30.2 | Enrutamiento de aplicación |
| **React Icons** | 5.5.0 | Librería de iconos profesionales |
| **AOS** | 2.3.4 | Animaciones al desplazar |

### Herramientas de Desarrollo

| Herramienta | Versión | Descripción |
|-----------|---------|-------------|
| **ESLint** | 9.39.1 | Linter de código |
| **Vite Plugin React SWC** | 4.2.1 | Plugin React para Vite con SWC |
| **Globals** | 16.5.0 | Variables globales de ESLint |

### Estilos

- **CSS Modules** - Estilos encapsulados por componente
- **CSS Variables** - Tema personalizable
- **Responsive Design** - Mobile-first approach

---

## 🧩 Componentes Principales

### Navbar
Barra de navegación fija con menú responsive y enlaces suavizados.

### Hero
Sección principal con animación de palabras cíclicas y CTA destacados.

### About
Descripción de la empresa y misión.

### Problem
Ventajas competitivas y comparativa visual.

### Solution
Tarjetas con iconos SVG para servicios principales.

### Opportunity
Estadísticas validadas del mercado objetivo.

### Financials
KPIs, testimonios con imágenes de clientes y resultados.

### Footer
Información de contacto, enlaces rápidos, formulario y redes sociales con iconos profesionales.

### Card
Componente reutilizable para mostrar información en tarjetas.

---

## ⚙️ Configuración

### Variables de CSS Globales

Todas las variables se encuentran en `src/index.css`:

```css
:root {
  --color-fondo: #121212;
  --color-texto: #FFFFFF;
  --color-texto-secundario: #A0A0A0;
  --color-acento: #39FF14;
  --color-card: #1E1E1E;
  --color-borde: #333333;
  --navbar-height: 80px;
}
```

### Breakpoints Responsivos

- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Móvil**: 480px - 768px
- **Móvil pequeño**: -480px

---

## 🌐 Despliegue

### Vercel (Recomendado)

1. Conectar repositorio GitHub
2. Configurar:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy automático en cada push

### Netlify

```bash
npm run build
# Subir carpeta 'dist' a Netlify
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## 👥 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para detalles.

---

## 📞 Contacto

**Eco Drone**

- 📧 Email: info@ecodrone.com
- 📱 WhatsApp: +503 1234-5678
- 📍 Ubicación: Chalatenango, El Salvador
- 🌐 Website: [www.ecodrone.com](https://www.ecodrone.com)

### Redes Sociales

- 📘 [Facebook](https://facebook.com/ecodrone)
- 📷 [Instagram](https://instagram.com/ecodrone)
- 💬 [WhatsApp Business](https://wa.me/50312345678)
- 📺 [YouTube](https://youtube.com/ecodrone)

---

## 🎯 Roadmap

- [ ] Integración con API de backend
- [ ] Sistema de booking de servicios
- [ ] Panel de cliente con reportes
- [ ] App móvil (React Native)
- [ ] Sistema de pagos integrado
- [ ] Chat en vivo con soporte
- [ ] Mapa interactivo de cobertura

---

## 📚 Recursos Adicionales

- [Documentación React](https://react.dev)
- [Documentación Vite](https://vitejs.dev)
- [React Icons Library](https://react-icons.github.io/react-icons)
- [AOS Animations](https://michalsnik.github.io/aos/)

---

## ⭐ Soporte

Si te fue útil, considera dejar una estrella ⭐ en GitHub.

**Última actualización:** 2025 | **Versión:** 1.0.0
