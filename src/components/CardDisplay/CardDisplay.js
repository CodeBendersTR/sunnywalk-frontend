import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns } from "react-bootstrap";		
			

	// Bootstrap Card Columns Side by Side
	function CardDisplay() {
	return (
		<CardColumns>
		<Card>
			<Card.Img variant="top" src="images/pic01.jpg" />
			<Card.Body>
			<Card.Title>Card title </Card.Title>
			<Card.Text>
				Card Text This card has supporting text below as a natural lead-in
				to additional content.{" "}
			</Card.Text>
			</Card.Body>
		</Card>

		<Card>
			<Card.Img variant="top" src="images/pic02.jpg" />
			<Card.Body>
			<Card.Title>Card title</Card.Title>
			<Card.Text>
				Card Text his card has supporting text below as a natural lead-in to
				additional content.{" "}
			</Card.Text>
			</Card.Body>
		</Card>

		<Card>
			<Card.Img variant="top" src="images/pic03.jpg" />
			<Card.Body>
			<Card.Title>Card title</Card.Title>
			<Card.Text>
				Card Text his card has supporting text below as a natural lead-in to
				additional content.{" "}
			</Card.Text>
			</Card.Body>
		</Card>
		</CardColumns>
	);
	}
	function App() {
	return (
		<div>
		<CardDisplay />
		</div>
	);
	}

	export default App;