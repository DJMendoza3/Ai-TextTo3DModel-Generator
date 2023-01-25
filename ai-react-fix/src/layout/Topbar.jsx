import styled from "styled-components";

const Header = styled.header`
    width: 100%;
    height: 60px;
    background-color: #2e2e2e;
    color: #fff;
`;

export default function Topbar({
    children,
}) {
    return (
        <Header>
            {children}
        </Header>
    );
}