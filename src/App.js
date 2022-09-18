import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import MainHeader from "./components/MainHeader"
import "./styles/shared.css"
import MainFooter from "./components/MainFooter"

function App() {
  return (
    <div
      className="app-container"
      style={{
        width: "100%",
        // height: "100vh",
        backgroundColor: "orange",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="routes-container">
        <MainHeader />
      </div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
      </Routes>
      <div className="footer-container">
        <MainFooter />
      </div>
    </div>
  )
}

export default App
