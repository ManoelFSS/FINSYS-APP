import styled from 'styled-components'

export const Conatianer = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #fff;
    gap: 1.5rem;
    padding: 1.2rem 2rem;
    position: relative;


    .icon-money {
        width: 4rem;
        height: 4rem;
        color: #63E6BE;
        border-radius:50%;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
        z-index: 1;
        position: relative;
    }

    .icon-after{
        width: 5.4rem;
        height: 5.4rem;
        border-radius:50%;
        position: absolute;
        top: 8.5px;
        left: 20px;
        background-color: transparent;
        z-index:0 ;
        animation: icon-money 2s linear infinite;
        box-shadow:inset 0px 4px 6px 1px rgba(99, 230, 191, 1);
    }

    @keyframes icon-money {
        0% 100% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    h1 {
        color: #000;
        font-size: 2rem;
        font-weight: bold;
        text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
        font-family: 'Open Sans', sans-serif;
    }
`