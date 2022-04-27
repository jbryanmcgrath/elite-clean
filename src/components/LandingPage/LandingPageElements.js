import styled from 'styled-components'

export const Container = styled.div`
    height: calc(100vh - 200px);
    display: flex;
    padding:20px;
`

export const Left = styled.div`
    width: 60%;
    margin-left: -50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Right = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
export const Title = styled.h1`
    font-size: 60px;
    width: 60%;
`

export const Description = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 10px;

`

export const Info = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:50px;

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

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
`

export const Phone = styled.span`
    color: black;
    font-weight: bold;
    span {
        color: #264496;
        cursor: pointer;
    }
`

export const ContactText = styled.span`
    color: grey;
`
export const Image = styled.img`
    width:100%;
    border: 2px solid black;
    
`