import {createSlice} from '@reduxjs/toolkit';

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        settingsOpen: true,
        prompt: '',
        meshID: '',
    },
    reducers: {
            UPDATE_PROMPT: (state, action) => {
                state.prompt = action.payload;
            },
            SETTINGS_TOGGLE: (state) => {
                state.settingsOpen = !state.settingsOpen;
            },
            SET_MESHID: (state, action) => {
                state.meshID = action.payload;
            }
    }
});

export const {SETTINGS_TOGGLE, UPDATE_PROMPT, SET_MESHID} = homeSlice.actions;
export default homeSlice.reducer;