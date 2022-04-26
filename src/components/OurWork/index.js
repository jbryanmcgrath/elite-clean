import React from 'react'
import { Container, Left, Right, Image, Title, SubTitle, Description, Button } from './OurWorkElements'
import OurWorkImg from '../../img/brad.png'


const OurWork = () => {
    return (
        <Container>
            <Left>
                <Image src={OurWorkImg} />
            </Left>
            <Right>
                <Title>
                    <b> Elite </b>Cleaning
                    <br />
                    <b>Local </b>Business
                </Title>
                <br />
                <SubTitle>
                    <b>Hello.    </b>My Name is Bobby Cook, owner and operator of Elite Clean Chattanooga. I'm proud of my community and I'm happy to call Chattanooga home.
                </SubTitle>
                <Description>
                    As a former property manager and owner, I know firsthand how hard it can be to find quality work at an affordable rate. I saw the need here for reliable and professional cleaning services in Chattanooga and created Elite Clean.
                    <br></br>
                    <br></br>
                    At Elite Clean, we want to be your <b>FIRST</b> contact for all of your cleaning needs. We hope you give us a chance to earn your repeat business. We look forward to hearing from you!
                </Description>
                <Button>
                    Get Quote
                </Button>
            </Right>
        </Container>
    )
}

export default OurWork