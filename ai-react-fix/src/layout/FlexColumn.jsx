import styled from "styled-components";

const Column = styled.div`
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        height: calc(100vh-50px);
        height: calc(${window.innerHeight}px - 50px);
        overflow-x: hidden;
        ${props => props.customStyle};
    `;

export default function FlexColumn({
    children,
    minWidth = '70%',
    customStyle = '',
}) {
    
    return(
        <Column minWidth={minWidth} customStyle={customStyle}>
            {children}
        </Column>
    );
}