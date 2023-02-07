import { useDispatch } from "react-redux";
import {NAV_TOGGLE} from "redux/slices/navSlice";

import ToggleButton from "components/ToggleButton";
import FlexRow from "layout/FlexRow";

import styles from "./features.module.css";

import arrow_logo from 'images/arrows.png';
import logo from 'images/logo.png';

export default function Header() {
    const dispatch = useDispatch();

    const Toggle = () => {
        dispatch(NAV_TOGGLE());
        //make element with id 'arrow-toggle' invert horizontally on toggle
        if(document.getElementById('arrow-toggle').style.transform === 'scaleX(-1)')
            document.getElementById('arrow-toggle').style.transform = 'scaleX(1)';
        else
            document.getElementById('arrow-toggle').style.transform = 'scaleX(-1)';

        
    }

    return (
        <header>
            <FlexRow>
                <ToggleButton clickHandler={Toggle} icon={arrow_logo} name={'arrow-toggle'}/>
            </FlexRow>
        </header>
    );
}