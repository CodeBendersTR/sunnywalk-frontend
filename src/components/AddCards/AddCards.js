import { Link } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardColumns } from 'react-bootstrap';


function AddCard() {
    return (
    <CardColumns>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some Custom text one can write here
            </Card.Text>
        </Card.Body>
        </Card>
    </CardColumns>
    );
}

export default AddCard; 

