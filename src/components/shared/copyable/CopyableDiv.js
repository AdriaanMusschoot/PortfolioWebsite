/* Style Imports */
import styled from 'styled-components';

export const Copyable = styled.div`
    margin-right: auto;
    position: relative;
    
    &::after {
        content: '${props => props.iscopied ? 'Copied' : 'Copy'}';
        position: relative;
        position: absolute;
        left: 50%;
        bottom: 70%;
        opacity: 0;
        pointer-events: none;
        transform: translateX(-50%);
        font-size: var(--p);
        background-color: var(--fill-color-grid-sections);
        padding: var(--padding-small);
        border-radius: var(--border-radius-small);
        white-space: nowrap;
    }

    &:hover {
        cursor: pointer;
        
        &::after {
            opacity: 1;
        }
    }
`