import {createSlice} from '@reduxjs/toolkit';

const navSlice = createSlice({
    name: 'nav',
    initialState: {
        currentPage: 'home',
        expanded: true,
    },
    reducers: {
            CHANGE_PAGE: (state, action) => {
                state.currentPage = action.payload;
            },
            NAV_TOGGLE: (state) => {
                state.expanded = !state.expanded;
            },
    }
});

export const {CHANGE_PAGE, NAV_TOGGLE} = navSlice.actions;
export default navSlice.reducer;