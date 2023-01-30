import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_MESHID, TOGGLE_DISPLAY_MODE, CLEAR_MESH_STATUS } from "redux/slices/homeSlice";
import { FETCH_URL } from "utils/globalVariables";
import io from "socket.io-client";

import FlexRow from "layout/FlexRow";

import styles from './home.module.css';

import question_icon from 'images/question.png';
import info_icon from 'images/info.png';
import { ADD_MESH_STATUS } from "redux/slices/homeSlice";

const socket = io(FETCH_URL, {
    cors: {
        origin: FETCH_URL,
        credentials: true
    }
});

export default function Prompt() {
    const dispatch = useDispatch();
    const density = useSelector(state => state.home.density);
    const resolution = useSelector(state => state.home.resolution);
    //changed to websocket using flask-socketio on the backend and socket.io-client on the frontend
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(CLEAR_MESH_STATUS());
        const data = new FormData(e.target);
        const prompt = data.get('prompt-form');
        console.log(prompt);
        let payload = JSON.stringify({prompt: prompt, density: density, resolution: resolution})
        //websocket for sending prompt to backend
        socket.emit('generate mesh', payload);
    }

    let rendered = false;
    useEffect(() => { 
        if (!rendered) {
            socket.on('connect', () => {
                dispatch(SET_MESHID(4));
                console.log('connected');
            });
            socket.on('disconnect', () => {
                console.log('disconnected');
            });
            socket.on('mesh id', (data) => {
                dispatch(SET_MESHID(data.mesh_id));
                console.log(data);
            });
            socket.on('model status', (data) => {
                dispatch(ADD_MESH_STATUS(data.status));
                console.log(data.status);
            });
            socket.on('display mode', (data) => {
                dispatch(TOGGLE_DISPLAY_MODE(data.display));
            });
            return () => {
                socket.off('connect');
                socket.off('disconnect');
                socket.off('mesh id');
            }
        }
        rendered = true;
    }, []);
    


    return (
        <div id={styles["prompt"]}>
            <FlexRow>
                <img src={question_icon} id={styles['question-img']} alt="" />
                <span className={styles['tooltip']} id={styles['question-tooltip']}>Type in a full descriptive sentence, as if you were writing a caption for a photo. Include as much detail as you see fit, including colors, styles, and emotions. Then click Generate to get your image.</span>
                <img src={info_icon} id={styles['info-img']} alt="" />
                <span className={styles['tooltip']} id={styles['info-tooltip']}>This application uses a text to image AI model to generate meshes.</span>
            </FlexRow>
                <form onSubmit={handleSubmit}>
                    <FlexRow gap={'15px'} alignItems={'center'}>
                        <textarea name="prompt-form" id="prompt-form" defaultValue="A corgie"/>
                        <input type="submit" />
                    </FlexRow>
                </form>
        </div>
    );
}