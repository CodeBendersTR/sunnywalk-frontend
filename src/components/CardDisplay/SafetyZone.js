import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns } from "react-bootstrap";		
			

	// Bootstrap Card Columns Side by Side
	function CardDisplay() {

    return (
      <CardColumns>
      <Card>
        <Card.Img variant="top" src="images/pic04.sm.jpg" crop="fill" alt=""  />
        <Card.Body>
        <Card.Title>Check the Weather Forecast & Daylight Hours </Card.Title>
        <Card.Text>
          Here comes the sun...confirm weather and sunshine hours to walk during peak preferences.     {" "}
        </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="images/pic11.citysmiles.sm.jpg" crop="fill" />
        <Card.Body>
        <Card.Title>Map Your Route</Card.Title>
        <Card.Text>
          Walking on sunshine...map your preferences to hit favourite spots whether a playground, dog or skate park or something completely new.{" "}
        </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="images/pic03.sm.jpg" crop="fill"  />
        <Card.Body>
        <Card.Title>Rate Your Walks</Card.Title>
        <Card.Text>
          Was your walk "You are my sunshine" or more like "Ain't no sunshine"...rate your walks and repeat the great ones...again and again. {" "}
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