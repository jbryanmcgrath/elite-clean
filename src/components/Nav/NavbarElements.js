import styled from "styled-components";

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration:none;
  font-weight:bold;
  font-weight:800;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    text-decoration: underline crimson;
  }
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height:50px;
  top: 0;
  left: 0;
  right: 0;
  
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: #000000;
  text-decoration: none;
  font-weight: 900;
  font-size: 1.7rem;
  text-decoration: underline crimson;
  span {
    color: #264496;
    font-weight: 800;
    font-size: 1.5rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Button = styled.button`
  border: 2px solid black;
  padding: 10px 15px;
  background-color: #264496;
  color: white;
  cursor: pointer;
  font-weight: bold;
  border-radius: 10px;
  &:hover{
    background-color: white;
    color:black;
    text-decoration: underline crimson;
  }
  

`