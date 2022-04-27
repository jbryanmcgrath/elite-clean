import React from 'react'
import { Container, Left, Right, Description, Title, Info, Button, Contact, Phone, ContactText, Image } from './LandingPageElements'
import HomeImg from '../../img/homeimg.png'

function LandingPage() {
    return (

        <Container id="landing-page">
            <Left>
                <Title>
                    Elite Clean is here for YOU.
                </Title>
                <Description>
                    EliteClean Chattanooga provides quality cleaning, janitorial, and pressure washing services for the greater Chattanooga area. We offer commercial and residential services at a competitive rate, providing the best value you can find!
                </Description>
                <Info>
                    <Button>
                        Learn More
                    </Button>
                    <Contact>
                        <Phone>
                            Call Us At <span>423-389-4771</span>
                        </Phone>
                        <ContactText>
                            InstagramPH || FacebookPH
                        </ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Image src={HomeImg} />
            </Right>
        </Container>


    )
}

export default LandingPage