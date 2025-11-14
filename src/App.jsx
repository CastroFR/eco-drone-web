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
      <div style={{ paddingTop: '80px' }}>
        <Hero />
        <About />
        <Problem />
        <Solution />
        <Opportunity />
        <Financials />
        <Footer />
      </div>
    </div>
  )
}

export default App