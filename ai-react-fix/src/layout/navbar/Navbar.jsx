import { useSelector } from "react-redux";
import { useEffect } from "react";

import NavLink from "components/NavLink";

import styles from './navbar.module.css';

import logo from 'images/logo.png';
import generate_logo from 'images/generate.png';
import history_logo from 'images/history.png';
import prompt_guide_logo from 'images/prompt.png';
import faq_logo from 'images/question.png';
import support_logo from 'images/settings.png';

export default function Navbar() {
    const navExpanded = useSelector(state => state.nav.expanded);

    useEffect(() => {
        if (navExpanded === true) {
            document.querySelector(':root').style.setProperty('--nav-width', '250px');
        } else {
            document.querySelector(':root').style.setProperty('--nav-width', '50px');
        }
    }, [navExpanded]);

    return (
        <nav>
            <img src={logo} alt="" className={`${styles['logo']} ${!navExpanded ? styles["downsize"] : ''}`}/>
            <ul>
                <NavLink name="Generate" icon={generate_logo} />
                <NavLink name="History" icon={history_logo} />
                <NavLink name="Prompt Guide" icon={prompt_guide_logo} />
                <NavLink name="FAQ" icon={faq_logo} />
                <NavLink name="Support" icon={support_logo} />
            </ul>
        </nav>
    );
}