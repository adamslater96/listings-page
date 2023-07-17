import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootReducer } from "../index";

interface State {
    menuIsActive: boolean,
    cartIsActive: boolean,
    minPrice: number,
    maxPrice: number,
    sortBy: number,
}

const initialState: State = {
    menuIsActive: false,
    cartIsActive: false,
    minPrice: 0,
    maxPrice: 0,
    sortBy: 0,
};

const menuSlice = createSlice({
    name:'@@menu',
    reducers: {
        setIsActiveBurger: (state, action: PayloadAction<boolean>) => {
            state.menuIsActive = action.payload;
        },
        setIsActiveCart: (state, action: PayloadAction<boolean>) => {
            state.cartIsActive = action.payload;
        },
        setMinPrice: (state, action: PayloadAction<number>) => {
            state.minPrice = action.payload;
        },
        setMaxPrice: (state, action: PayloadAction<number>) => {
            state.maxPrice = action.payload;
        },
        setSortBy: (state, action: PayloadAction<number>) => {
            state.sortBy = action.payload;
        },
    },
    initialState,
});

export const menuReducer = menuSlice.reducer;
export const { setIsActiveBurger, setMinPrice, setMaxPrice, setSortBy, setIsActiveCart } = menuSlice.actions;
export const selectBurger = ({ menuReducer: { menuIsActive } }: RootReducer) => menuIsActive;
export const selectCart = ({ menuReducer: { cartIsActive } }: RootReducer) => cartIsActive;
export const selectMinPrice = ({ menuReducer: { minPrice } }: RootReducer) => minPrice;
export const selectMaxPrice = ({ menuReducer: { maxPrice } }: RootReducer) => maxPrice;
export const selectSortBy = ({ menuReducer: { sortBy } }: RootReducer) => sortBy;