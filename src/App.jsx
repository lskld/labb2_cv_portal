import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Cv from './pages/Cv'
import Projects from './pages/Projects'
import About from './pages/About'
import Footer from './components/footer/footer'

function App() {

  return (
    <BrowserRouter basename='/labb2_cv_portal'>
      <div className='app_layout'>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
