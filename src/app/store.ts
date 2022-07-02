import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import UserAuth from "../features/UserAuthSlice";
import governorateReducer from "../features/governorateSlice";
import placesReducer from "../features/placesSlice";
import placeAddcommentReducer from "../features/PlaceAddCommentSlice";
import transitionDirectionReducer from "../features/transitonDirectionSlice";
import goToSignupReducer from "../features/goToSignupSlice";
export const store = configureStore({
  reducer: {
    userAuth: UserAuth,
    governorate: governorateReducer,
    places: placesReducer,
    placeAddComment: placeAddcommentReducer,
    transtionDirection: transitionDirectionReducer,
    goToSignup: goToSignupReducer,
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
