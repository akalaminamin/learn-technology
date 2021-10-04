import React from "react";
import { Col, Card } from "react-bootstrap";
import "./SingleService.css"

const SingleService = ({ service }) => {
  const { price, title, description, image } = service;
  return (
    <>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card className="card-content">
            <div className="card-img">
              <img variant="top" alt="card" className="card-image" src={image} />
            </div>
            <Card.Body className="card-body">
              <h5 className="price">${price}</h5>
              <h2>{title}</h2>
              <p>{description}</p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default SingleService;
