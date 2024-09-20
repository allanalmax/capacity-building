import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import { Tasks } from "./Tasks";
import { Texts } from "./Texts";
//import { Facts } from "./Facts";
import Axios from "axios";
//import { Predict } from "./Predict";
import { Home } from "./pages/Home";
import { Predict } from "./pages/Predict";
import { Facts } from "./pages/Facts";
import { Tasks } from "./pages/Tasks";
import { Profile } from "./pages/Profile";
import { Navbar } from "./Navbar";

function App() {
  const [userName, setUserName] = useState("Allan");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home userName={userName} />} />
          <Route
            path="/profile"
            element={<Profile userName={userName} setUserName={setUserName} />}
          />
          <Route path="/facts" element={<Facts />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/*" element={<h3>Page not found</h3>} />
        </Routes>
      </Router>

      {/*<div className={"App"}>*/}
      {/*  <button*/}
      {/*    onClick={() => {*/}
      {/*      setShowText(!showText);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    Show Text*/}
      {/*  </button>*/}

      {/*  {showText && <Texts />}*/}
      {/*</div>*/}
    </div>
  );
}

export default App;
