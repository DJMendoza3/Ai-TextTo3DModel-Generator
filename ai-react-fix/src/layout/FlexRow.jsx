import styled from "styled-components";

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: ${props => props.alignItems};
    gap: ${props => props.gap};
`;

export default function FlexRow({
    children,
    gap = '0',
    alignItems = '',
}) {
    return(
        <Row gap={gap} alignItems={alignItems}>
            {children}
        </Row>
    );
}