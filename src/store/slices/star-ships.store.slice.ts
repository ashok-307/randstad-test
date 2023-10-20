import { createSlice } from "@reduxjs/toolkit";
import StarShipsAPI from "../apis/star-ships.store.api";
import { buildMatcher } from "../utils/build-matcher";
// import axios from "axios";

const InitialState = {
    starShips: [],
    isLoading: false,
    films: []
};

const StarShipsSlices = createSlice({
    name: 'StarShipsAPI',
    initialState: InitialState,
    reducers: {},
    extraReducers(builder) {
        buildMatcher(builder, 'api/star-ships', StarShipsAPI, 'starShips', {
            fulfilled: async (state, action) => {
                state.starShips = action.payload.results;
            }
        });
    },
});

export default StarShipsSlices.reducer;
