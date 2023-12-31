import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { RootReducer } from "../index";

interface State {
    menuIsActive: boolean,
    cartIsActive: boolean,
    minPrice: number,
    maxPrice: number,
    sortBy: number,
    color: number,
}

const initialState: State = {
    menuIsActive: false,
    cartIsActive: false,
    minPrice: 0,
    maxPrice: 0,
    sortBy: 0,
    color: 0,
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
        setColor: (state, action: PayloadAction<number>) => {
            state.color = action.payload
        },
    },
    initialState,
});

//Slice Reducer - to implement in to root reducer
export const menuReducer = menuSlice.reducer;

//Actions - to adjust reducer properties
export const { setIsActiveBurger, setMinPrice, setMaxPrice, setSortBy, setIsActiveCart, setColor } = menuSlice.actions;

//Reducer properties - to grab/reference properties
export const selectBurger = ({ menuReducer: { menuIsActive } }: RootReducer) => menuIsActive;
export const selectCart = ({ menuReducer: { cartIsActive } }: RootReducer) => cartIsActive;
export const selectMinPrice = ({ menuReducer: { minPrice } }: RootReducer) => minPrice;
export const selectMaxPrice = ({ menuReducer: { maxPrice } }: RootReducer) => maxPrice;
export const selectSortBy = ({ menuReducer: { sortBy } }: RootReducer) => sortBy;
export const selectColor = ({ menuReducer: { color } }: RootReducer) => color;