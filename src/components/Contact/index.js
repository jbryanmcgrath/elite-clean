import React from "react";
import { Container, Wrapper, FormContainer, Title, Form, LeftForm, Input, RightForm, TextArea, AddressContainer, AddressItem, Text, Button } from './ContactElements'


const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>
                        Questions? <br /> Let's Get In Touch
                    </Title>
                    <Form>
                        <LeftForm>
                            <Input placeholder="Your Name" />
                            <Input placeholder="Your Email" />
                            <Input placeholder="Subject" />
                        </LeftForm>
                        <RightForm>
                            <TextArea placeholder="Your Message" />
                            <Button>Send</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Text>Chattanooga, TN</Text>
                    </AddressItem>
                    <AddressItem>

                        <Text>1(423) 389-4771 </Text>

                    </AddressItem>
                    <AddressItem>
                        <Text>eliteclean@gmail.com</Text>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
        </Container>
    );
};

export default Contact;