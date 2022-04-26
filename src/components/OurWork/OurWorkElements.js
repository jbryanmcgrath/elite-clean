import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
`

export const Left = styled.div`
    width:40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Right = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin-right: 45px;
    margin-top: 10%;
`

export const Image = styled.img`
    width:100%;
`

export const Title = styled.span`
    font-size: 70px;
    
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
  background-color: #264496;
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


