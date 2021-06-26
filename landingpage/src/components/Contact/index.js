import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './ContactElements'

const Contact = () => {
    return (
        <>
         <Container>
            <FormWrap>
             <Icon to="/">Financetify</Icon>   
             <FormContent>
                <Form action="#">
                    <FormH1>Contact Us</FormH1>
                    <FormLabel htmlFor='for'>Name</FormLabel>
                        <FormInput type='name' required/>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>
                    <FormLabel htmlFor='for'>Message</FormLabel>
                        <FormInput type='message' required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Financetify's Contact</Text>
                </Form>  
             </FormContent> 
            </FormWrap>     
         </Container>   
        </>
    )
}

export default Contact
