import {createSlice} from '@reduxjs/toolkit';

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        settingsOpen: true,
        prompt: '',
        meshID: 4,
        modelDisplay: true,
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
            },
            MODEL_DISPLAY_TOGGLE: (state) => {
                state.modelDisplay = !state.modelDisplay;
            }
    }
});

export const {SETTINGS_TOGGLE, UPDATE_PROMPT, SET_MESHID, MODEL_DISPLAY_TOGGLE} = homeSlice.actions;
export default homeSlice.reducer;