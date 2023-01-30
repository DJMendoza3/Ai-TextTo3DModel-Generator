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

import settings_logo from 'images/settings.png';

export default function Home() {
    const settingsOpen = useSelector(state => state.home.settingsOpen);
    const device = useSelector(state => state.home.settingsDevice);
    const dispatch = useDispatch();

    const Toggle = () => {
        dispatch(SETTINGS_TOGGLE());
    }

    return (
        <div id={styles["home"]}>
            <FlexRow>
                <FlexColumn customStyle={'flex: 1; padding-left: 5%;'}>
                    <ModelViewer />
                    <Prompt />
                </FlexColumn>
                <ToggleButton clickHandler={Toggle} customStyle={'background-color: #1c4e80; width: 35px; height: 35px; padding: 5px;'} icon={settings_logo}/>
                {settingsOpen === true ? 
                <Aside width={device === 'desktop' ? '30%' : '90%'} customStyle={'transition: margin-right 1s, width 1s; margin-right: 0'}> 
                    <GeneratorSettings />
                </Aside> : 
                <Aside width={device === 'desktop' ? '30%' : '90%'} customStyle={device === 'desktop' ? 'transition: margin-right 1s; margin-right: -30%' : 'transition: margin-right 1s; margin-right: -90%'}>
                    <GeneratorSettings />
                </Aside>}    
            </FlexRow>
        </div>
    );
}