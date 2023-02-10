import React from "react"
import Welcome from "./components/content/welcome/Welcome"
import NavBar from "./components/navbar/NavBar"
import './styles/App.scss'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
    </div>
  )
}

export default App
