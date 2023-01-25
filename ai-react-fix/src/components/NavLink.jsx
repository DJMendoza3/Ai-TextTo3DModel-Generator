import { useSelector } from "react-redux";

export default function NavLink({
    name,
    icon,
}) {
    const navExpanded = useSelector(state => state.nav.expanded);
    return (
        <li>
            <a href="#">
                <img src="" alt="" />
                {navExpanded ? <span>{name}</span> : null}
            </a>
        </li>
    );
}