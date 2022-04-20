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
                <MenuLink href="">Our Work</MenuLink>
                <MenuLink href="">Janitorial</MenuLink>
                <MenuLink href="">Pressure Washing</MenuLink>
                <MenuLink href="">Contact</MenuLink>
                <Button>
                    Get Quote
                </Button>
            </Menu>
        </Nav>

    )
}

export default Navbar