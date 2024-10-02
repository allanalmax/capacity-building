import React from "react";
import "./App.css";
import { Person, Country } from "./components/Person";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NavBar } from "./NavBar";
import { Provider } from "react-redux";
import { store } from "./store";
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/person"
              element={
                <Person
                  name={"Allan"}
                  email={"allan@domina.com"}
                  age={21}
                  isMarried={true}
                  friends={["Jake", "Jessica", "Jerry"]}
                  country={Country.Uganda}
                />
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
