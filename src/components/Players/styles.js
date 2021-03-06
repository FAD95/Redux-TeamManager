import styled from 'styled-components'

export const PlayersSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px 2px rgba(#000, 0.05);
    border: 1px solid #104266;
    .container-player {
        overflow: auto;
        padding-bottom: 2rem;
    }
    h3 {
        margin-bottom: var(--spacing);
        color: white;
        font-weight: normal;
    }
    button {
        line-height: 2rem;
        padding: 0 1rem;
        border-radius: 1rem;
    }
    button:first-child {
    $color: #2A8CE1;
    color: #fff;
    background-color: $color;
    margin-right: var(--spacing);
    &:hover {
        background-color: darken($color, 10);
    }
    }
    button:nth-child(2) {
    background: rgb(83, 87, 90);
    color: white;
    border: 1px solid var(--color);
    &:hover {
        background-color: rgb(58, 62, 65);
        color: #fff;
        }
    }
    }
`
