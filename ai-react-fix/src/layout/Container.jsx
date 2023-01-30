import { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { TOGGLE_SETTINGS } from "redux/slices/homeSlice";
import { TOGGLE_WIDTH } from "redux/slices/navSlice";

import Topbar from "layout/Topbar";
import Header from "features/Header";
import Navbar from "layout/navbar/Navbar";
import FlexRow from "layout/FlexRow";
import Main from "layout/Main";
import Aside from "layout/Aside";
import Switch from "./Switch";

import styles from "layout/layout.module.css";

export default function Container() {
    const dispatch = useDispatch();
    let device = 'desktop';

    useLayoutEffect(() => {
        //check window size on initial page load
        if (window.innerWidth < 1000 && device === 'desktop') {
            dispatch(TOGGLE_WIDTH('mobile'));
            dispatch(TOGGLE_SETTINGS('mobile'));
            console.log('mobile switch');
            device = 'mobile';
        } else if (window.innerWidth > 1000 && device === 'mobile') {
            dispatch(TOGGLE_WIDTH('desktop'));
            dispatch(TOGGLE_SETTINGS('desktop'));
            console.log('desktop switch');
            device = 'desktop';
        }
    }, []);

    useEffect(() => {
         //check window size on resize
        window.addEventListener('resize', () => {
            if (window.innerWidth < 1000 && device === 'desktop') {
                dispatch(TOGGLE_WIDTH('mobile'));
                dispatch(TOGGLE_SETTINGS('mobile'));
                console.log('mobile switch');
                device = 'mobile';
            } else if (window.innerWidth > 1000 && device === 'mobile') {
                dispatch(TOGGLE_WIDTH('desktop'));
                dispatch(TOGGLE_SETTINGS('desktop'));
                console.log('desktop switch');
                device = 'desktop';
            }
        });
    }, []);

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