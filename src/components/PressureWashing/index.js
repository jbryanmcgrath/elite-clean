import React from 'react'
import { Container, Left, Right, Image, Title, UL } from './PressureWashingElements'
import PressureWashingImage from '../../img/pressure-washing.png'
import DrivewayImage from '../../img/driveway.jpg'


const PressureWashing = () => {

    const PressureWashingServices = [
        { id: 1, serviceoffered: 'Business front walkways and lots' },
        { id: 2, serviceoffered: 'Residential driveways and sidewalks' },
        { id: 3, serviceoffered: 'Business and resdiential garbage bins' }
    ]

    return (
        <Container id="pressure-washing">
            <Left>
                <Image src={PressureWashingImage} />
                <Image src={DrivewayImage} />
            </Left>
            <Right>
                <Title>
                    Pressure Washing
                </Title>
                <UL>
                    {PressureWashingServices.map(data => (
                        <li key={data.id}> {data.serviceoffered}</li>
                    ))}
                </UL>
            </Right>
        </Container>
    )
}

export default PressureWashing