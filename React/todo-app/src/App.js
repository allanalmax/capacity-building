import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SampleForm } from "./pages/SampleForm";
import { Toggle } from "./pages/Toggle";
import { Counter } from "./pages/Counter";

export const AppContext = createContext();

function App() {
  const client = new QueryClient();
  const [userName, setUserName] = useState("Allan");

  return (
    <div className="App">
      {/*<QueryClientProvider client={client}>*/}
      <AppContext.Provider value={{ userName, setUserName }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/facts" element={<Facts />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/form" element={<SampleForm />} />
            <Route path="toggle" element={<Toggle />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/*" element={<h3>Page not found</h3>} />
          </Routes>
        </Router>
      </AppContext.Provider>
      {/*</QueryClientProvider>*/}

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
