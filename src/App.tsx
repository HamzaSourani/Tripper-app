import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
const Signup = lazy(() => import("./components/userAuth/signup/Signup"));
const Login = lazy(() => import("./components/userAuth/Login"));
const Favorite = lazy(() => import("./components/Favorite"));
function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="favorite" element={<Favorite />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
