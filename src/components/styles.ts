import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;
    padding: 50px;

    display: flex;
    justify-content: space-between;

    border: 1px solid  #f0f0f5;
    background-color:  #f0f0f5;
    color: #000;
    box-shadow: 0 0 100px rgba(00, 00, 00, 0.5);

`

export const VideosList = styled.div`
    overflow-y: scroll;
    max-width: 350px;
`

export const VideoContainer = styled.div`
    margin-right: 50px;
    max-width: 600px;
`

export const Item = styled.div`
    width: 100%;
    margin-top: 20px
`

export const Button = styled.div`
    background: inherit;
    cursor: pointer;
    transition: 0.6s;

    &:hover{
        opacity: 85%
    }
`

export const NoVideo = styled.div`
    width: 630px;
    height: 350px;
    background-color: #111;
`