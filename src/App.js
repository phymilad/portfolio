import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import MainHeader from "./components/header/MainHeader"
import "./styles/App.css"
import MainFooter from "./components/footer/MainFooter"

function App() {
  return (
    <div className="app-container">
      <MainHeader />
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <MainFooter />
    </div>
  )
}

export default App
