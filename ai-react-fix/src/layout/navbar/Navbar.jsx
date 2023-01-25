import { useSelector } from "react-redux";
import { useEffect } from "react";

import NavLink from "components/NavLink";

import styles from './navbar.module.css';

export default function Navbar() {
    const navExpanded = useSelector(state => state.nav.expanded);

    useEffect(() => {
        console.log(navExpanded);
        if (navExpanded === true) {
            document.querySelector(':root').style.setProperty('--nav-width', '250px');
        } else {
            document.querySelector(':root').style.setProperty('--nav-width', '50px');
        }
    }, [navExpanded]);

    return (
        <nav>
            <img src="" alt="" className="logo"/>
            <h4>MENU</h4>
            <ul>
                <NavLink name="Dream" icon="" />
                <NavLink name="History" icon="" />
                <NavLink name="Prompt Guide" icon="" />
                <NavLink name="FAQ" icon="" />
                <NavLink name="Support" icon="" />
            </ul>
        </nav>
    );
}