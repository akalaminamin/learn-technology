// import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import useServices from "../../hooks/useServices/useServices";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services] = useServices();
  return (
    <div className="container">
      <Row xs={1} md={3} className="g-4">
        {services.map((service) => (
          <SingleService key={service.id} service={service}></SingleService>
        ))}
      </Row>
    </div>
  );
};

export default Services;
