import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-family: sans-serif;
        background: #102132;
    
    }
    :root {
        --spacing: 0.75rem;
    }
    h1 {
        color: white;
        margin-bottom: 3rem;
        font-size: 2.5rem;    
    }
    h2 {
        margin-bottom: 1rem;
        color: white
    }
    main {
        margin: 0 auto;
        max-width: 1500px;
        padding: 2rem 1rem;
    }
    section {
        margin-bottom: 4rem;
        padding: 1rem;
        background: #0c1926;
        border-radius: 8px; 
    }
    button {
        border: none;
        cursor: pointer;
        outline: none;
    }
    article img {
        --size: 4.5rem;
        width: var(--size);
        height: var(--size);
        object-fit: cover;
        border-radius: 100%;
        margin-bottom: var(--spacing);
    }
    section>div:not(.field):not(.container-player) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        
        @media screen and (min-width: 640px) {
            grid-template-columns: repeat(6, 1fr);
        } 
    }
`
