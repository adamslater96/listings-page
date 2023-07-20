import { useDispatch } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { basketReducer } from './slices/basketSlice'
import { menuReducer } from './slices/menuSlice'
import { searchReducer } from "./slices/searchSlice";
import { dataReducer } from "./slices/dataSlice";

//Root reducer used to combine all reducers, this is done to pull in all seperate store slices. It allows us to keep things organised and segregated whilst allowing for flexibility and inclusion of all store vals

const rootReducer = combineReducers({
    basketReducer,
    menuReducer,
    searchReducer,
    dataReducer,
})

//Setting typing of reducers and dispatches whilst exporting
export type RootReducer = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
});
export type AppDispatch = typeof store.dispatch;
export const useTypeDispatch: () => AppDispatch = useDispatch;