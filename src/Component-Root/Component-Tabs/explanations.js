import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Explanations() {
  return (
    <div className="container">
      <Card>
        <Card.Header className="cardHeader">Explanations</Card.Header>
        <Card.Body className="cardBody">
          <Card.Title as="h5">What we can do</Card.Title>
          <Card.Text>
            Enter your image and mask. Then retrieve the id of the latter.
            <br />
            By clicking on the pyradiomics tab you can select an image and a
            mask via their id. You can then extract the radiomics
            characteristics, recover metadatas and delete images.
          </Card.Text>
          <Button variant="secondary" href="https://www.google.fr/">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Explanations;
