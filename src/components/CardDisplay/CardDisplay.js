import React from "react";
// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardDeck } from "react-bootstrap";

// Bootstrap Card Columns Side by Side
function CardDisplay() {
    return (
        <CardDeck>
            <Card>
                <Card.Img
                    variant="top"
                    src="images/pic04.sm.jpg"
                    crop="fill"
                    alt="Woman, wearing backpack and jacket, and 4 children hike on path in woods, arm around a child, while others play ahead"
                    aspect-ratio="attr(width) / attr(height)"
                    accessibility="colorblind"
                />
                <Card.Body>
                    <Card.Title> Check the Weather Forecast & Daylight Hours </Card.Title>
                    <Card.Text>
                        Here comes the sun...confirm weather and sunshine hours to walk during peak
                        preferences. {""}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img
                    variant="top"
                    src="images/pic11.citysmiles.sm.jpg"
                    crop="fill"
                    accessibility="colorblind"
                    alt="Young man of colour in foreground, wearing jean jacket and backpack, brightly smiles at camera with blurred background of people and city"
                />
                <Card.Body>
                    <Card.Title>Map Your Desitination</Card.Title>
                    <Card.Text>
                        Walking on sunshine...map your preferences to hit favourite spots whether a
                        playground, dog or skate park or something completely new.{""}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img
                    variant="top"
                    src="images/pic03.sm.jpg"
                    crop="fill"
                    accessibility="colorblind"
                    alt="Smiling woman, wearing jacket and hair windblown, offers stick to interested dog, with man smiling in immediate background"
                />
                <Card.Body>
                    <Card.Title>Rate Your Walks</Card.Title>
                    <Card.Text>
                        Was your walk "You are my sunshine" or more like "Ain't no sunshine"...rate
                        your walks and repeat the great ones...again and again. {""}
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
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
