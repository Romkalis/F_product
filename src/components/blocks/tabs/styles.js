import styled from 'styled-components'

export const StyledTabs = styled.div`
display: flex;
flex-wrap: wrap;
gap: 8px;
`

export const TabButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: min-content;
    height: 24px;
    padding: 8px 12px;
    background-color: #f6f6f6;
    border: 1px solid rgba(0, 0, 0, 0.10);
    transition: background-color, color, outline 0.5s ease;

    &:hover {
    outline: 1px solid #88aa4d;
    }
    &:active
    {
        background-color: #88AA4D;
        color: white;
    }
`

export const Content = styled.section`
    text-align: left;
`