import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import "./styles/App.css"

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
