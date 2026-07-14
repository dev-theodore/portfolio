import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from "./components/NavBar/NavBar"
import LandingPage from "./pages/LandingPage"
import ProjectsPage from "./pages/ProjectsPage"
import Footer from "./components/Footer/Footer"
import "./App.css"


function App() {

  const pages = [
      { id: 1, name: 'Home', path: '/' },
      { id: 2, name: 'Software Projects', path: '/software-projects' },
      { id: 3, name: '3D Artwork', path: '/3d-artwork' },
      { id: 4, name: 'About', path: '/about' },
      { id: 5, name: 'Skills', path: '/skills' },
      { id: 6, name: 'Contact', path: '/contact' },
    ]
  
  const [activePage, setActivePage] = useState('Home')
  const [theme, setTheme] = useState('dark')

  function changeTheme() {
      theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <div className="app">
      <NavBar 
        pages={pages}
        theme={theme}
        changeTheme={changeTheme}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/software-projects" element={<ProjectsPage title={activePage} />} />
          <Route path="/3d-artwork" element={<ProjectsPage title={activePage} />} />
          <Route path="*" element={<h1>Page In Development :|</h1>} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
