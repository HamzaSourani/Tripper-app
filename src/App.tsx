import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
const Home = lazy(() => import("./components/Home"));
const Signup = lazy(() => import("./components/userAuth/signup/Signup"));
const Login = lazy(() => import("./components/userAuth/Login"));
const Favorite = lazy(() => import("./components/Favorite"));
const Governorates = lazy(() => import("./components/Governorates"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route index element={<NavBar />} />
          </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="favorite" element={<Favorite />}>
            <Route index element={<NavBar />} />
          </Route>
          <Route path="governorates" element={<Governorates />}>
            <Route index element={<NavBar />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
