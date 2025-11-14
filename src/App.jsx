import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
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
    <Router>
      <div className="App">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Problem />
          <Solution />
          <Opportunity />
          <Financials />
          <Footer />
        </main>
      </div>
    </Router>
  )
}

export default App