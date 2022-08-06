import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import UserAuth from "../features/UserAuthSlice";
import governoratesReducer from "../features/governoratesSlice";
import governorateDetailsReducer from "../features/governorateDetailsSlice";
import placesReducer from "../features/placesSlice";
import placeAddcommentReducer from "../features/PlaceAddCommentSlice";
import transitionDirectionReducer from "../features/transitonDirectionSlice";
import goToSignupReducer from "../features/goToSignupSlice";
import tripsReducer from "../features/tripsSlice";
import placeReducer from "../features/placeSilce";
import isUserAuthorizedReducer from "../features/isUserAuthorizedSlice";
import snackbarReducer from "../features/snackbarSlice";
import userFavoriteReducer from "../features/userFavoritesSlice";
import placeTypeReducer from "../features/fetchPlaceTypeSlice";
export const store = configureStore({
  reducer: {
    userAuth: UserAuth,
    governorates: governoratesReducer,
    governorateDetails: governorateDetailsReducer,
    places: placesReducer,
    place: placeReducer,
    placeAddComment: placeAddcommentReducer,
    transtionDirection: transitionDirectionReducer,
    goToSignup: goToSignupReducer,
    trips: tripsReducer,
    isUserAuthorized: isUserAuthorizedReducer,
    snackbar: snackbarReducer,
    userFavorite: userFavoriteReducer,
    placeType: placeTypeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
