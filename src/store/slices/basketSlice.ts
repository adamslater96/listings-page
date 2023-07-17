import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { RootReducer } from "..";
import { BasketState } from "../../types/sliceTypes";

const initialState: BasketState = {
    products: [],
    total: 0,
};

const basketSlice = createSlice({
    name: "@@basket",
    reducers: {
        setProducts: (state, action) => {
            const currentState = current(state.products)

            let arr = []
            for (let i = 0; i < currentState.length; i++) {
                arr.push(currentState[i].payload.id)
            }

            //Only add one time to cart
            if(arr.includes(action.payload.id)){
                return
            } else {
                state.products = [...state.products, action]
            }
        },
        removeProducts: (state, action: PayloadAction) => {
            state.products = current(state.products).filter( (product: { payload: any }) => product.payload.id !== action.payload)
        },
    },
    initialState,
});

//Slice Reducer
export const basketReducer = basketSlice.reducer;

//Actions
export const { setProducts, removeProducts } = basketSlice.actions;

//Reducer properties
export const selectProducts = ({ basketReducer: { products } }: RootReducer) => products;
export const selectTotal = ({ basketReducer: { total } }: RootReducer) => total;