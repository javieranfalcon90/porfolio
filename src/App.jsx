import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.bundle.min.js'

import './assets/style.css'

import Navbar from "./components/Navbar"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Project from "./components/Project"

function App() {


  return (
    <>
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Project />
    </>
  )
}

export default App
