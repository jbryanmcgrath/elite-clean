import React from 'react'
import { Container, Left, Right, Image, Title, UL } from './JanitorialElements'
import JanitorialImg from '../../img/janitorial.png'

const Janitorial = () => {

    const JanitorialServicesList = [
        { id: 1, offeredservice: 'Weekly/Monthly Office Cleaning' },
        { id: 2, offeredservice: 'Move Out Cleans' },
        { id: 3, offeredservice: 'Move In Cleans' },
    ]


    return (
        <Container>
            <Left>
                <Title>
                    Janitorial Services
                </Title>
                <UL>
                    {JanitorialServicesList.map(data => (
                        <li key={data.id}> {data.offeredservice}</li>
                    ))}
                </UL>
            </Left>
            <Right>
                <Image src={JanitorialImg} />
            </Right>
        </Container>
    )
}

export default Janitorial