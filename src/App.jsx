import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Problem from './components/Problem/Problem'
import Solution from './components/Solution/Solution'
import Opportunity from './components/Opportunity/Opportunity'
import Financials from './components/Financials/Financials'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="nosotros">
          <About />
        </section>
        <section id="problema">
          <Problem />
        </section>
        <section id="solucion">
          <Solution />
        </section>
        <section id="viabilidad">
          <Opportunity />
        </section>
        <Financials />
        <section id="contacto">
          <Footer />
        </section>
      </main>
    </div>
  )
}

export default App