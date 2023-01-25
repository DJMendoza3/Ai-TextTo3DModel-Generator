import { useDispatch } from "react-redux";
import { SET_MESHID } from "redux/slices/homeSlice";

import FlexRow from "layout/FlexRow";

import styles from './home.module.css';

export default function Prompt() {
    const dispatch = useDispatch();
    
    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const prompt = data.get('prompt-form');
        console.log(prompt);
        fetch('http://10.1.10.164:5000/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({prompt: prompt})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            dispatch(SET_MESHID(data.id));
        })
        .catch(err => console.log(err));
    }
    


    return (
        <div id={styles["prompt"]}>
            <FlexRow>
                <p>question</p>
                <p>info</p>
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