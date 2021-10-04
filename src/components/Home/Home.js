import "./Home.css";
import { Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";
import useServices from "../../hooks/useServices/useServices";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [services] = useServices();
  return (
    <>
      <div className="hero-area">
        <div className="container text-start">
          <h1 className="text-start">
            Master the Skills to Drive <br /> your Career.
          </h1>
          <p className="mt-3">
            The output of image processing establish <br /> the subject of image
            in a more focused way and delivers exact message.
          </p>
          <NavLink to="/contact">
            <button className="hero-btn mt-4">Contact Us</button>
          </NavLink>
          <button className="hero-btn learn-btn mt-4">Learn More</button>
        </div>
      </div>
      <div className="services container">
        <span>Select Services</span>
        <h2>Explore Popular Services</h2>
        <Row xs={1} md={3} className="g-4">
          {services.slice(0, 6).map((service) => (
            <SingleService key={service.id} service={service}></SingleService>
          ))}
        </Row>
        <div className="btn-wrapper">
          <NavLink to="/services">
            <button className="same-btn">View All Services</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
