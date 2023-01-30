import {createSlice} from '@reduxjs/toolkit';

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        settingsOpen: true,
        settingsDevice: 'desktop',
        meshStatus: ['generating'],
        displayMode: true,
        prompt: '',
        meshID: 0,
        modelDisplay: true,
        density: 1024,
        resolution: 32,
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
            },
            UPDATE_DENSITY: (state, action) => {
                state.density = action.payload;
            },
            UPDATE_RESOLUTION: (state, action) => {
                state.resolution = action.payload;
            },
            TOGGLE_SETTINGS: (state, action) => {
                state.settingsDevice = action.payload;
            },
            TOGGLE_DISPLAY_MODE: (state, action) => {
                state.displayMode = action.payload;
            },
            CLEAR_MESH_STATUS: (state) => {
                state.meshStatus = ['generating'];
            },
            ADD_MESH_STATUS: (state, action) => {
                state.meshStatus = [...state.meshStatus, action.payload];
            }
    }
});

export const {SETTINGS_TOGGLE, UPDATE_PROMPT, CLEAR_MESH_STATUS, SET_MESHID, ADD_MESH_STATUS, TOGGLE_DISPLAY_MODE, MODEL_DISPLAY_TOGGLE, UPDATE_DENSITY, UPDATE_RESOLUTION, TOGGLE_SETTINGS} = homeSlice.actions;
export default homeSlice.reducer;