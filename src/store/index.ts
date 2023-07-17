import { useDispatch } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { basketReducer } from './slices/basketSlice'
import { menuReducer } from './slices/menuSlice'
import { searchReducer } from "./slices/searchSlice";
import { dataReducer } from "./slices/dataSlice";

const rootReducer = combineReducers({
    basketReducer,
    menuReducer,
    searchReducer,
    dataReducer,
})

export type RootReducer = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
});
export type AppDispatch = typeof store.dispatch;
export const useTypeDispatch: () => AppDispatch = useDispatch;