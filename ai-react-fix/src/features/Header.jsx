import { useDispatch } from "react-redux";
import {NAV_TOGGLE} from "redux/slices/navSlice";

import ToggleButton from "components/ToggleButton";
import FlexRow from "layout/FlexRow";

import styles from "./features.module.css";

export default function Header() {
    const dispatch = useDispatch();

    const Toggle = () => {
        console.log('toggle');
        dispatch(NAV_TOGGLE());
    }

    return (
        <header>
            <FlexRow>
                <ToggleButton clickHandler={Toggle}/>
                <h1>Header</h1>
            </FlexRow>
        </header>
    );
}