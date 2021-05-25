import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    background-size: cover;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6), 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;   
`


export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 136px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

    span {
        color: #4A90E2
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }    
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;   
    
    button { 
        width: 123px;
        height: 51px;
        background: #4A90E2;
        border: none;
        border-radius: 5px;
        font-weight: weight(semibold);
        font-size: 1.05rem;
        color: white;
        
        @include transition-ease;

        &:focus, &:hover, &:active {
            border: none;
            outline: none;
            box-shadow: none;
            font-weight: weight(regular);
            font-size: 1.2rem;
        }
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    justify-content: center ;
    align-items: center;
    background-color:rgba(0, 0, 0, 0.4);
` 

export const FirstArea = styled.li`
    list-style: none;
    text-align: right;
    font-weight: bold;
    color: #fff;
    
    span {
        color: #3B7ADB;
    }
`

export const Area = styled.li`
    list-style: none;
    border-left: solid 1px #fff;
    color: #fff;
`

export const HeroTrendingToday = styled.div`
    background: transparent;
    height: 100px;
    align-self: stretch;
    width: 100%;
    margin: -24px;
    margin-top: 0;
    z-index: 2;
    position: relative;
    grid-column-start: first;
    grid-column-end: last;

    @media (max-width: 768px) {
        background-color: blue;
        display: none;
    }
`