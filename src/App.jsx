import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Cv from './pages/Cv'
import Projects from './pages/Projects'
import About from './pages/About'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cv">CV</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
