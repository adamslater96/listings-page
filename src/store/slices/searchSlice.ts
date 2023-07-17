import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootReducer } from "../index";

interface State {
    searchTerm: string,
}

const initialState: State = {
    searchTerm: "",
};

const searchSlice = createSlice({
    name:'@@search',
    reducers: {
        setTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
    },
    initialState,
});

export const searchReducer = searchSlice.reducer;
export const { setTerm } = searchSlice.actions;
export const selectTerm = ({ searchReducer: { searchTerm } }: RootReducer) => searchTerm;