import React, { lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
const Home = lazy(() => import("./components/Home"));
const Signup = lazy(() => import("./components/userAuth/signup/Signup"));
const Login = lazy(() => import("./components/userAuth/Login"));
const Favorite = lazy(() => import("./components/Favorite"));
const Governorates = lazy(
  () => import("./components/governorates/Governorates")
);
const GovernorateDetails = lazy(
  () => import("./components/governorates/GovernorateDetails")
);
const Places = lazy(() => import("./components/places/Places"));
const PlaceDetails = lazy(() => import("./components/places/PlaceDetails"));
const Trips = lazy(() => import("./components/trip/Trips"));
const TripDetails = lazy(() => import("./components/trip/TripDetails"));

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

          <Route
            path={`home/governorate/:governorateId`}
            element={<GovernorateDetails />}
          >
            <Route index element={<NavBar />} />
          </Route>
          <Route
            path={`governorates/governorate/:governorateId`}
            element={<GovernorateDetails />}
          >
            <Route index element={<NavBar />} />
          </Route>
          <Route path="home/places" element={<Places />}>
            <Route index element={<NavBar />} />
          </Route>
          <Route path={`home/place/:placeId`} element={<PlaceDetails />}>
            <Route index element={<NavBar />} />
          </Route>
          <Route path={`home/places/place/:placeId`} element={<PlaceDetails />}>
            <Route index element={<NavBar />} />
          </Route>
          <Route path="home/trips" element={<Trips />}>
            <Route index element={<NavBar />} />
          </Route>
          <Route path="home/place/:placeId/trips" element={<Trips />}>
            <Route index element={<NavBar />} />
          </Route>
          <Route path={`home/trip/:tripId`} element={<TripDetails />}>
            <Route index element={<NavBar />} />
          </Route>
          <Route path={`home/trips/trip/:tripId`} element={<TripDetails />}>
            <Route index element={<NavBar />} />
          </Route>
          <Route
            path={`home/place/:placeId/trips/trip/:tripId`}
            element={<TripDetails />}
          >
            <Route index element={<NavBar />} />
          </Route>
          <Route
            path={`home/place/:placeId/trip/:tripId`}
            element={<TripDetails />}
          >
            <Route index element={<NavBar />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
