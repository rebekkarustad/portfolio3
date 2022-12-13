import "./sass/style.scss";
import { Route, Routes } from "react-router-dom";
import TopNav from "./components/layout/Nav";

import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
