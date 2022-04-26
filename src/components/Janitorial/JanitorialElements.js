import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content: center;
    height: calc(100vh - 200px);
`

export const Right = styled.div`
    width: 50%;
    margin-top:200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const UL = styled.ul`
    align-items:left;
    justify-content: left;
`
export const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items:center;

`

export const Image = styled.img`
    width:80%;
`

export const Title = styled.span`
    font-size: 60px;
    
`


export const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color:#333;
    margin-top: 30px;

`


export const Description = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`


export const Button = styled.button`
    border: 2px solid black;
  padding: 10px 15px;
  background-color: #005E7C;
  color: white;
  cursor: pointer;
  font-weight: bold;
  border-radius: 10px;
  letter-spacing: 2px;
  &:hover{
    background-color: white;
    color:black;
    text-decoration: underline crimson;
  }
`


