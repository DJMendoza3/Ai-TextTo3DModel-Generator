import { useSelector } from "react-redux";
import styled from "styled-components";

const NavImage = styled.img`
    width: 30px;
`;
const NavA = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    `;

export default function NavLink({
    name,
    icon = '',
}) {
    const navExpanded = useSelector(state => state.nav.expanded);
    return (
        <li>
            <NavA href="#">
                <NavImage src={icon} alt="" />
                {navExpanded ? <span>{name}</span> : null}
            </NavA>
        </li>
    );
}