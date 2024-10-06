import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'filters',
    initialState: {
        name: '',
    },
    reducers: {
        changeFilter(state, action) {
            return {
                ...state,
                name: action.payload,
            };
        },
    },
});

export const { setFilterName } = slice.actions;

export default slice.reducer;