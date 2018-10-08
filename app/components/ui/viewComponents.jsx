import styled, { css } from 'styled-components';

export const Grid = styled.ul`
    position: relative;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 1em;
    list-style: none outside;
    padding: 0;
    opacity: 0
        ${props =>
            props.show &&
            css`
                opacity: 1;
            `};
`;

export const GridItem = styled.li`
    padding: 1em;
    border-radius: 3px;
    border-width: 2px;
    border-color: #555;
    border-style: solid;
    cursor: pointer;
    text-align: center;
    ${props =>
        props.active &&
        css`
            border-color: #222;
            background: #aa9999;
            color: #eeeeee;
        `};
`;
