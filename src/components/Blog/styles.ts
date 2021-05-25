import styled from 'styled-components'

export const BlogContainer = styled.div`
    background: #fff;
    margin-top: 10vh;
    display: flex;

    @media screen and (max-width: 768px) {
        padding: 100px;
    }
`

export const BlogWrapper = styled.div`
    display: grid;
    z-index: 2;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`


export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 60px;
    width: 100%;
    float: right;
`

export const AboutUs = styled.p`
    color: #4A90E2;
    font-size: 30px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`

export const Text = styled.h4`
    margin-bottom: 24px;
    font-size: 16px;
    
    color: #3E4D60;

    @media screen and (max-width: 488px) {
        font-size: 12px;
    }
`
export const ImgContainer = styled.div`
    width: 20%;
    float: left;
    margin: 0px;
    overflow: hidden;
    height: 100px;

    flex: 1;
    display: flex;
    justify-self: center;
    width: 100%;
    min-height: 272px;
    border-radius: 8px;
    background-size: cover;
`

export const GridBlog = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px 0px;
    align-items: center;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`



