import styled from "styled-components"

const Side = styled.aside`
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    max-width: ${props => props.maxWidth};
    ${props => props.customStyle};
`;

export default function Aside({
    children,
    width = 'auto',
    minWidth = '',
    maxWidth = '',
    customStyle = '',
}) {

    return (
        <Side width={width} minWidth={minWidth} maxWidth={maxWidth} customStyle={customStyle}>
            {children}
        </Side>
    );
}