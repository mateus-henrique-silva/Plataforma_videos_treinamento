import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Login from "./Pages/Login/Login"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
