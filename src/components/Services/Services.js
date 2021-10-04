// import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import useServices from "../../hooks/useServices/useServices";
import PageHeader from "../PageHeader/PageHeader";
import SingleService from "../SingleService/SingleService";
import "./Services.css";
const Services = () => {
  const [services] = useServices();
  return (
    <>
      <PageHeader>Our Services</PageHeader>
      <div className="container">
        <div className="services">
          <Row xs={1} md={3} className="g-4">
            {services.map((service) => (
              <SingleService key={service.id} service={service}></SingleService>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Services;
