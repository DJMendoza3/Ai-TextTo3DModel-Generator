import Topbar from "layout/Topbar";
import Header from "features/Header";
import Navbar from "layout/navbar/Navbar";
import FlexRow from "layout/FlexRow";
import Main from "layout/Main";
import Aside from "layout/Aside";
import Switch from "./Switch";

import styles from "layout/layout.module.css";

export default function Container() {

    return (
        <div id={styles["container"]}>
            <Topbar>
                <Header/>
            </Topbar>
            <FlexRow>
                <Aside>
                    <Navbar />
                </Aside>
                <Main>
                    <Switch />
                </Main>
            </FlexRow>
        </div>
    );
}