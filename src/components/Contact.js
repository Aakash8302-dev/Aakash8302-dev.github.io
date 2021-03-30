import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import emailjs from 'emailjs-com'

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vzoyk1p', 'template_zhejbpt', e.target, 'user_v2mdAD9aaSuOH6OGWzSeY')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

        e.target.reset();
    }


    return (
        <section className="contact" id="contact">
            <Container>
            <h3 className="contact-title">Contact</h3>
            <Form align="center" className="form"  onSubmit={sendEmail}>
            <Form.Group align="center" controlId="Name">
                <Form.Control className="form-input" type="text" placeholder="Name"  name="name"/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group align="center" controlId="Email">
                <Form.Control  className="form-input" type="email" placeholder="Email" name="email" />
            </Form.Group>

            <Form.Group align="center" controlId="Message">
                <Form.Control as='textarea' rows={10}  className="form-input" type="text" placeholder="Message" name="message" />
            </Form.Group>
            <Button variant="light" type="submit" className="form-btn">
                SUBMIT <i class="fas submit-icon fa-paper-plane"></i>
            </Button>
            </Form>
            </Container>
        </section>
    )
}

export default Contact
