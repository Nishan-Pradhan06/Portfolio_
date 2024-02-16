import './App.css'
import NavBar from './pages/NavBar'
import Footer from './pages/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Services from './pages/Services'
import Projects from './pages/Projects'
// import YourComponent from './components/BackTop'
import Contacts from './pages/Contacts'
function App() {
  return (
    <>
      {/* <YourComponent /> */}
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
