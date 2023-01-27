import { useDispatch } from "react-redux";
import { SET_MESHID } from "redux/slices/homeSlice";
import { FETCH_URL } from "utils/globalVariables";

import FlexRow from "layout/FlexRow";

import styles from './home.module.css';

import question_icon from 'images/question.png';
import info_icon from 'images/info.png';

export default function Prompt() {
    const dispatch = useDispatch();
    //changed to websocket using flask-socketio on the backend and socket.io-client on the frontend
    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const prompt = data.get('prompt-form');
        console.log(prompt);
        fetch(FETCH_URL + '/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({prompt: prompt})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.mesh_id);
            dispatch(SET_MESHID(data.mesh_id));
        })
        .catch(err => console.log(err));
    }
    


    return (
        <div id={styles["prompt"]}>
            <FlexRow>
                <img src={question_icon} alt="" />
                <img src={info_icon} alt="" />
            </FlexRow>
                <form onSubmit={handleSubmit}>
                    <FlexRow gap={'15px'} alignItems={'center'}>
                        <textarea name="prompt-form" id="prompt-form" defaultValue="A corgie wearing a santa hat"/>
                        <input type="submit" />
                    </FlexRow>
                </form>
        </div>
    );
}