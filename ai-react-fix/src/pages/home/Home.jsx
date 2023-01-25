import { useSelector, useDispatch } from "react-redux";
import { SETTINGS_TOGGLE } from "redux/slices/homeSlice";

import Aside from "layout/Aside";
import FlexRow from "layout/FlexRow";
import FlexColumn from "layout/FlexColumn";
import GeneratorSettings from "features/GeneratorSettings";
import ToggleButton from "components/ToggleButton";
import ModelViewer from "components/ModelViewer";
import Prompt from "./Prompt";

import styles from "./home.module.css";

export default function Home() {
    const settingsOpen = useSelector(state => state.home.settingsOpen);
    const dispatch = useDispatch();

    const Toggle = () => {
        dispatch(SETTINGS_TOGGLE());
    }

    return (
        <div id={styles["home"]}>
            <FlexRow>
                <FlexColumn customStyle={'flex: 1'}>
                    <ModelViewer />
                    <Prompt />
                </FlexColumn>
                <ToggleButton clickHandler={Toggle}/>
                {settingsOpen === true ? 
                <Aside width={'30%'} customStyle={'transition: width 1s'}> 
                    <GeneratorSettings />
                </Aside> : 
                <Aside width={'0px'} customStyle={'transition: width 1s'}>
                    <GeneratorSettings />
                </Aside>}    
            </FlexRow>
        </div>
    );
}