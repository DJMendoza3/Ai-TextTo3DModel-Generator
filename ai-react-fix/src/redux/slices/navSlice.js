import {createSlice} from '@reduxjs/toolkit';

const navSlice = createSlice({
    name: 'nav',
    initialState: {
        currentPage: 'home',
        expanded: false,
        width: '250px',
        minWidth: '50px',
    },
    reducers: {
            CHANGE_PAGE: (state, action) => {
                state.currentPage = action.payload;
            },
            NAV_TOGGLE: (state) => {
                state.expanded = !state.expanded;
            },
            TOGGLE_WIDTH: (state, action) => {
                if (action.payload === 'mobile') {
                    state.width = '100vw';
                    state.minWidth = '0px';
                } else {
                    state.width = '250px';
                    state.minWidth = '50px';
                }
            }
    }
});

export const {CHANGE_PAGE, NAV_TOGGLE, TOGGLE_WIDTH} = navSlice.actions;
export default navSlice.reducer;