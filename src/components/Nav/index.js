import React, { useState } from 'react'
import { Nav, MenuLink, Logo, Menu, Hamburger, Button } from './NavbarElements'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <Nav>
            <Logo href="#">

                Elite<span>Clean</span>Chattanooga
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink to="our-work">Our Work</MenuLink>
                <MenuLink to="janitorial">Janitorial</MenuLink>
                <MenuLink to="pressure-washing">Pressure Washing</MenuLink>
                <MenuLink>Contact</MenuLink>
                <Button>
                    Get Quote
                </Button>
            </Menu>
        </Nav>

    )
}

export default Navbar