import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../types/sliceTypes";
import { RootReducer } from "../index";

interface State {
    facets: Array<object>,
    products: Array<Products>,
}

const initialState: State = {
    facets: [],
    products: [],
};

const dataSlice = createSlice({
    name:'@@data',
    reducers: {
        setFacets: (state, action: PayloadAction<Array<object>>) => {
            state.facets = action.payload;
        },
        setProducts: (state, action: PayloadAction<Array<Products>>) => {
            state.products = action.payload;
        }
    },
    initialState,
});

export const dataReducer = dataSlice.reducer;
export const { setFacets, setProducts } = dataSlice.actions;
export const selectFacets = ({ dataReducer: { facets } }: RootReducer) => facets;
export const selectProducts = ({ dataReducer: { products } }: RootReducer) => products;