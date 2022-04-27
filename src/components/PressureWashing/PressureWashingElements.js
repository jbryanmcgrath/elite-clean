import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content: center;
    height: calc(100vh - 100px);
`
export const Right = styled.div`
    width: 50%;
    margin-top:none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Left = styled.div`
    width: 50%;
    margin-top: 108px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items:center;

`

export const Image = styled.img`
    width:60%;
    height: 50%;
    margin:15px;
    border: 2px solid black;
`

export const Title = styled.span`
    font-size: 60px;
    
`

export const UL = styled.ul`
    align-items:left;
    justify-content: left;
`