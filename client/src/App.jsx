import NavBar from "./components/NavBar/NavBar"
import LandingPage from "./pages/LandingPage"
import Footer from "./components/Footer/Footer"
import "./App.css"


function App() {
  return (
    <div className="app">
      <NavBar />

      <main id="main-content">
        <LandingPage />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
