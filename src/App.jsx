import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
        <Routes>
          <Route/>
        </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  )
}

export default App
