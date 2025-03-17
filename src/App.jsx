import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css'

//Import de las views del proyecto
import Home from "@pages/Home/Home";
import Detail from "@pages/Detail/Detail";

//imports del layout del proyecto
import Navbar from "@components/Navbar/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;