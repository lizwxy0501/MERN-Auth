import { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";



const Register = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('submit register info')
    }

  return (
    <FormContainer>
        <h1>Sign Up</h1>
        <Form onSubmit={ submitHandler }>

        <Form.Group className="my-2" controlId="userName">
                <Form.Label> Name </Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="email">
                <Form.Label> Email Address </Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="password">
                <Form.Label> Password </Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="confirmPassword">
                <Form.Label> Confirm Password </Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Comfirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-3">
                Sign Up
            </Button>

            <Row className="py-3">
                <Col>
                    Already have an account?  <Link to='/login'>Sign In</Link>
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}

export default Register;