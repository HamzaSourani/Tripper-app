import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { RootState } from "./app/store";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { checkUserStatus } from "./features/isUserAuthorizedSlice";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/Footer";
import Loading from "./sharedComponents/Loading";
import Box from "@mui/material/Box";
import GoToSignup from "./sharedComponents/GoToSignup";
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
const Profile = lazy(() => import("./components/user/Profile"));
const EditProfile = lazy(() => import("./components/user/EditProfile"));
const LandingPage = lazy(() => import("./landingPage/Index"));
function App() {
  const isUserauthorized = useAppSelector(
    (state: RootState) => state.isUserAuthorized.state
  );
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(checkUserStatus());
  }, [dispatch]);

  return (
    <div className="App">
      <Box sx={{ pb: { xs: 45, lg: 25 } }}>
        <GoToSignup />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />}>
              <Route index element={<NavBar />} />
            </Route>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />

            <Route path="governorates" element={<Governorates />}>
              <Route index element={<NavBar />} />
            </Route>

            <Route
              path={`governorate/:governorateId`}
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
            <Route path="places" element={<Places />}>
              <Route index element={<NavBar />} />
            </Route>
            <Route path={`place/:placeId`} element={<PlaceDetails />}>
              <Route index element={<NavBar />} />
            </Route>
            <Route path={`places/place/:placeId`} element={<PlaceDetails />}>
              <Route index element={<NavBar />} />
            </Route>
            <Route path="trips" element={<Trips />}>
              <Route index element={<NavBar />} />
            </Route>
            <Route path="place/:placeId/trips" element={<Trips />}>
              <Route index element={<NavBar />} />
            </Route>
            <Route path={`trip/:tripId`} element={<TripDetails />}>
              <Route index element={<NavBar />} />
            </Route>
            <Route path={`trips/trip/:tripId`} element={<TripDetails />}>
              <Route index element={<NavBar />} />
            </Route>
            <Route
              path={`place/:placeId/trips/trip/:tripId`}
              element={<TripDetails />}
            >
              <Route index element={<NavBar />} />
            </Route>
            <Route
              path={`place/:placeId/trip/:tripId`}
              element={<TripDetails />}
            >
              <Route index element={<NavBar />} />
            </Route>
            {isUserauthorized && (
              <>
                <Route path={`profile`} element={<Profile />}>
                  <Route index element={<NavBar />} />
                </Route>
                <Route path="favorite" element={<Favorite />}>
                  <Route index element={<NavBar />} />
                </Route>
                <Route path="edit-profile" element={<EditProfile />}>
                  <Route index element={<NavBar />} />
                </Route>
              </>
            )}
          </Routes>
        </Suspense>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
