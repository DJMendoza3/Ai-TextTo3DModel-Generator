import styled from "styled-components";

import styles from "./components.module.css";

const Button = styled.button`
    height: 30px;
    width: 30px;
    margin: 20px;
    background: none;
    border: none;
    border-radius: 4px;
    ${props => props.customStyle};
`;

export default function ToggleButton({
    icon = '',
    clickHandler,
    customStyle = '',
    name = '',
    backgroundColor = null,
}) {
    return (
            <Button onClick={clickHandler} customStyle={customStyle} backgroundColor={backgroundColor}>
                <img src={icon} alt="" className={styles['icon-img']} id={name}/>
            </Button>
    );
}