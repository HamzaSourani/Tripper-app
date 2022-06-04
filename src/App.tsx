import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
const Signup = lazy(() => import("./components/userAuth/signup/Signup"));

function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
